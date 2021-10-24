import React, { useState } from 'react';
import { useSelector, useDispatch } from '@hooks';
import { Instagram, Close } from '@material-ui/icons';

import { CustomDialog, Content, Wrapper, ImagesContainer, CloseBtn, TitleContainer, Title, Footer, ModalBtn, LoadMoreBtn } from './styles';

import api from 'src/services/api';

import Loading from '@components/Loading/animation';
import InstaImg from './InstaImg';

import {
  setInstagramModalOpen,
  setInstagramLoading,
  setInstagramNextPage,
  setInstagramImages,
  setImgFiles,
  clearInstagramSelected,
} from '@modules/review/actions';

async function getBase64FromUrl(url: string) {
  const data = await fetch(url);
  const blob = await data.blob();

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
}

function InstagramModal() {
  const dispatch = useDispatch();

  const { images, loading, selected, nextPage } = useSelector((state) => state.review.instagramModal);
  const fb_token = useSelector((state) => state.user.fb.access_token);

  const [innerLoading, setInnerLoading] = useState(false);

  function handleClose() {
    dispatch(setInstagramModalOpen({ payload: false }));
    dispatch(setInstagramLoading({ payload: false }));
    dispatch(clearInstagramSelected());
  }

  async function handleLoadMore() {
    try {
      setInnerLoading(true);
      const { data } = await api.get(nextPage);

      dispatch(setInstagramNextPage({ payload: data?.paging?.next ?? '' }));

      const mediaList = data?.data.map(({ id }: { id: string }) => id);
      const _images = [];

      for (const media of mediaList) {
        const { data: mediaData } = await api.get(
          `https://graph.instagram.com/${media}?fields=id,media_type,media_url,username,timestamp&access_token=${fb_token}`
        );

        if (mediaData.media_type === 'CAROUSEL_ALBUM') {
          const { data: childrenData } = await api.get(
            `https://graph.instagram.com/${media}/children?fields=id,media_type,media_url,username,timestamp&access_token=${fb_token}`
          );

          for (const child of childrenData.data) {
            if (child.media_type === 'IMAGE') {
              _images.push({ id: child.id, url: child.media_url });
            }
          }
        } else {
          if (mediaData.media_type === 'IMAGE') {
            _images.push({ id: mediaData.id, url: mediaData.media_url });
          }
        }
      }

      dispatch(setInstagramImages({ payload: _images }));
      setInnerLoading(false);
    } catch (error) {
      setInnerLoading(false);
    }
  }

  async function handleSelection() {
    try {
      const selectedFiles = [];

      for (const img of selected) {
        const img64 = await getBase64FromUrl(img.url);
        selectedFiles.push({
          src: img64,
          cropped: img64,
          dimensions: { x: 0, y: 0, zoom: 1 },
        });
      }

      dispatch(setImgFiles({ payload: selectedFiles }));
      dispatch(setInstagramModalOpen({ payload: false }));
      dispatch(clearInstagramSelected());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CustomDialog open={true}>
      <TitleContainer>
        <Title>
          <Instagram />
          <span>Selecione do Instagram</span>
        </Title>

        <CloseBtn onClick={() => handleClose()}>
          <Close />
        </CloseBtn>
      </TitleContainer>
      <Wrapper>
        <Content className="thin-scrollbar">
          {loading ? (
            <Loading instagram />
          ) : (
            <>
              <ImagesContainer>
                {images.length && images.map((img, index) => <InstaImg key={index} url={img.url} alt={`img-${index}`} id={img.id} />)}
              </ImagesContainer>
              {nextPage && !innerLoading && <LoadMoreBtn onClick={() => handleLoadMore()}>Carregar mais imagens</LoadMoreBtn>}
              {innerLoading && <Loading />}
            </>
          )}
        </Content>
      </Wrapper>
      <Footer>
        <span>{`Fotos selecionadas: ${selected.length}`}</span>
        <ModalBtn onClick={() => handleSelection()}>Concluir</ModalBtn>
      </Footer>
    </CustomDialog>
  );
}

export default InstagramModal;
