import React, { useState } from 'react';
import { useSelector, useDispatch } from '@hooks';
import { Instagram, Close, ExitToApp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { v4 as uuid } from 'uuid';

import {
  CustomDialog,
  Content,
  Wrapper,
  ImagesContainer,
  CloseBtn,
  LogoutBtn,
  TitleContainer,
  Title,
  Footer,
  ModalBtn,
  LoadMoreBtn,
} from './styles';

import { db } from 'src/db';
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

import { clearFbToken } from '@modules/user/actions';

async function getBase64FromUrl(url: string) {
  const data = await fetch(url);
  const blob = await data.blob();

  return new Promise<string | null>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;

      if (typeof base64data === 'string') {
        resolve(base64data);
      }

      resolve(null);
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

  function handleInstagramLogout() {
    dispatch(setInstagramModalOpen({ payload: false }));
    dispatch(setInstagramLoading({ payload: false }));
    dispatch(clearInstagramSelected());
    dispatch(clearFbToken());
  }

  async function handleLoadMore() {
    try {
      setInnerLoading(true);
      const { data: mediaList } = await api.get(nextPage);

      dispatch(setInstagramNextPage({ payload: mediaList?.paging?.next ?? '' }));

      const _images = [];

      for (const mediaData of mediaList.data) {
        if (mediaData.media_type === 'CAROUSEL_ALBUM') {
          const { data: childrenData } = await api.get(
            `https://graph.instagram.com/${mediaData.id}/children?fields=id,media_type,media_url&access_token=${fb_token}`
          );
          
          for (const child of childrenData.data) {
            if (child.media_type === 'IMAGE') {
              _images.push({ id: child.id, url: child.media_url.replace(/^[^.]*/, 'https://scontent') });
            }
          }
        } else {
          if (mediaData.media_type === 'IMAGE') {
            _images.push({ id: mediaData.id, url: mediaData.media_url.replace(/^[^.]*/, 'https://scontent') });
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
        const imgFile = {
          id: uuid(),
          src: img64,
          cropped: img64,
          dimensions: { x: 0, y: 0, zoom: 1 },
          small: false,
        };
        await db.files.put({ id: imgFile.id, content: imgFile });
        selectedFiles.push(imgFile);
      }

      dispatch(setImgFiles({ payload: selectedFiles }));
      dispatch(setInstagramModalOpen({ payload: false }));
      dispatch(clearInstagramSelected());
    } catch (error) {
      window.alert('Ops...! Ocorreu algum erro ao carregar as imagens do instagram, conecte-se novamente!');
      handleInstagramLogout();
    }
  }

  return (
    <>
      <CustomDialog open={true}>
        <TitleContainer>
          <Tooltip title="Desconectar conta do Instagram">
            <LogoutBtn onClick={() => handleInstagramLogout()}>
              <ExitToApp />
            </LogoutBtn>
          </Tooltip>

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
                  {images.length ? images.map((img, index) => <InstaImg key={index} url={img.url} alt={`img-${index}`} id={img.id} />) : ''}
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
    </>
  );
}

export default InstagramModal;
