import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from '@hooks';

import {
  setImgFiles,
  setInstagramImages,
  setInstagramModalOpen,
  setInstagramLoading,
  setInstagramNextPage,
  setLoadingTilesCount,
} from '@modules/review/actions';
import { checkImgQuality } from 'src/utils/common_functions';
import { resizeImage } from 'src/utils/resizeImage';

import api from 'src/services/api';
import { db } from 'src/db';

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

  const { loadingTilesCount, files: imgFiles } = useSelector((state) => state.review);
  const instaImages = useSelector((state) => state.review.instagramModal.images);
  const fb_token = useSelector((state) => state.user.fb.access_token);

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles: any[] = [];

    dispatch(setLoadingTilesCount({ payload: e?.target?.files ? e.target.files.length : 0 }));
    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        const fileData = await resizeImage(e.target.files[i]);
        const objectURL = URL.createObjectURL(e.target.files[i]);

        const isSmall = await checkImgQuality(objectURL);

        const imgFile = {
          id: uuid(),
          src: fileData,
          cropped: fileData,
          small: isSmall,
          dimensions: { x: 0, y: 0, zoom: 1 },
        };

        await db.files.put({ id: imgFile.id, content: imgFile });
        _imgFiles.push(imgFile);
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
    dispatch(setLoadingTilesCount({ payload: 0 }));
  };

  async function handleInstagram() {
    try {
      if (!fb_token) {
        return router.push(
          `https://www.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_FB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_BASE_URL}/review/&scope=user_profile,user_media&response_type=code`
        );
      } else {
        dispatch(setInstagramModalOpen({ payload: true }));

        if (instaImages.length) {
          return;
        }

        dispatch(setInstagramLoading({ payload: true }));

        const { data: user } = await api.get(`https://graph.instagram.com/me?fields=id&access_token=${fb_token}`);
        const { data: userMediaList } = await api.get(
          `https://graph.instagram.com/${user.id}/media/?fields=id,media_type,media_url&access_token=${fb_token}&limit=15`
        );

        dispatch(setInstagramNextPage({ payload: userMediaList?.paging?.next ?? '' }));
        const images = [];

        for (const mediaData of userMediaList.data) {
          if (mediaData.media_type === 'CAROUSEL_ALBUM') {
            const { data: childrenData } = await api.get(
              `https://graph.instagram.com/${mediaData.id}/children?fields=id,media_type,media_url&access_token=${fb_token}`
            );

            for (const child of childrenData.data) {
              if (child.media_type === 'IMAGE') {
                images.push({ id: child.id, url: child.media_url.replace(/^[^.]*/, 'https://scontent') });
              }
            }
          } else {
            if (mediaData.media_type === 'IMAGE') {
              images.push({ id: mediaData.id, url: mediaData.media_url.replace(/^[^.]*/, 'https://scontent') });
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

  useEffect(() => {
    if (router.query?.code && fb_token) {
      handleInstagram();
    }

    //eslint-disable-next-line
  }, [router?.query, fb_token]);

  return (
    <Container>
      {imgFiles.length > 0 || loadingTilesCount > 0 ? (
        <>
          <TileImages selectedImages={imgFiles} />
        </>
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
            <FullOption onClick={() => handleInstagram()}>
              <InstagramIcon />
              <span>Importar do Instagram</span>
            </FullOption>
          </OptionsContainer>
        </GetStartedContainer>
      )}
    </Container>
  );
}

export default SelectionSection;
