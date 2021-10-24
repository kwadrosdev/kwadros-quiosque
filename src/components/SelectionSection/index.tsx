import React from 'react';

import { useRouter } from 'next/router';

import { useSelector, useDispatch } from '@hooks';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './materialStyles';

import { setImgFiles, setInstagramImages, setInstagramModalOpen, setInstagramLoading, setInstagramNextPage } from '@modules/review/actions';

import api from 'src/services/api';

import TileImages from '@components/TileImages';

import {
  Container,
  GetStartedContainer,
  OptionsContainer,
  FullOptionInput,
  FullOptionInputMask,
  FullOption,
  CameraIcon,
  InstagramIcon,
  Divider,
} from './styles';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function SelectionSection() {
  const router = useRouter();
  const dispatch = useDispatch();

  const imgFiles = useSelector((state) => state.review.files);
  const instaImages = useSelector((state) => state.review.instagramModal.images);
  const fb_token = useSelector((state) => state.user.fb.access_token);

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles = [];

    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        let fileData: any = await readFile(e.target.files[i]);
        _imgFiles.push({ src: fileData, cropped: fileData, dimensions: { x: 0, y: 0, zoom: 1 } });
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
  };

  async function handleInstagram() {
    try {
      if (!fb_token) {
        return router.push(
          'https://www.instagram.com/oauth/authorize?client_id=228315275914683&redirect_uri=https://kwadros.vercel.app/review/&scope=user_profile,user_media&response_type=code'
        );
      } else {
        dispatch(setInstagramModalOpen({ payload: true }));

        if (instaImages.length) {
          return;
        }

        dispatch(setInstagramLoading({ payload: true }));

        const { data } = await api.get(`https://graph.instagram.com/me?fields=id,username,media&access_token=${fb_token}`);

        dispatch(setInstagramNextPage({ payload: data.media?.paging?.next ?? '' }));

        const mediaList = data.media.data.map(({ id }: { id: string }) => id);
        const images = [];

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
                images.push({ id: child.id, url: child.media_url });
              }
            }
          } else {
            if (mediaData.media_type === 'IMAGE') {
              images.push({ id: mediaData.id, url: mediaData.media_url });
            }
          }
        }

        dispatch(setInstagramImages({ payload: images }));
        dispatch(setInstagramLoading({ payload: false }));
      }
    } catch (error) {
      dispatch(setInstagramLoading({ payload: false }));
      dispatch(setInstagramModalOpen({ payload: false }));
      dispatch(setInstagramImages({ payload: [] }));
    }
  }

  return (
    <Container>
      {imgFiles.length > 0 ? (
        <TileImages selectedImages={imgFiles} />
      ) : (
        <GetStartedContainer>
          <h3>Escolha algumas fotos para começar</h3>
          <OptionsContainer>
            <FullOption>
              <FullOptionInputMask tabIndex={0}>
                <FullOptionInput type="file" onChange={onFileChange} multiple accept="image/*" tabIndex={-1} />
              </FullOptionInputMask>
              <CameraIcon />
              <span>Carregar fotos</span>
            </FullOption>
            <Divider>Ou</Divider>
            <FullOption onClick={handleInstagram}>
              <InstagramIcon />
              <span>Importar do Instagram</span>
            </FullOption>
          </OptionsContainer>
        </GetStartedContainer>
      )}
    </Container>
  );
}

function readFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default withStyles(styles)(SelectionSection);
