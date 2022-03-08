import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from '@hooks';
import { AddRounded } from '@material-ui/icons';
import { useRouter } from 'next/router';

import {
  Container,
  AddImages,
  AddWrapper,
  AddIcon,
  CameraIcon,
  InstagramIcon,
  AddOption,
  FullOptionInputMask,
  FullOptionInput,
  ResponsiveButtons,
  ResponsiveBtn,
  CircleAddBtn,
} from './styles';

import TileImg from './TileImg';

import { setImgFiles, setInstagramImages, setInstagramModalOpen, setInstagramLoading, setInstagramNextPage } from '@modules/review/actions';
import { checkImgQuality } from 'src/utils/common_functions';

import api from 'src/services/api';
import { db } from 'src/db';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function TileImages({ selectedImages }: { selectedImages: any[] }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const instaImages = useSelector((state) => state.review.instagramModal.images);
  const max_kwadros = useSelector((state) => state.review.max_kwadros);
  const fb_token = useSelector((state) => state.user.fb.access_token);

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles: any[] = [];

    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        const fileData: any = await readFile(e.target.files[i]);
        const objectURL = URL.createObjectURL(e.target.files[i]);

        const isSmall = await checkImgQuality(objectURL);

        const imgFile = {
          id: uuid(),
          src: fileData,
          cropped: fileData,
          small: isSmall,
          dimensions: { x: 0, y: 0, zoom: 1 },
        };

        _imgFiles.push(imgFile);
        await db.files.put({ id: imgFile.id, content: imgFile });
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
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

  return (
    <>
      <Container className="thin-scrollbar">
        {selectedImages.map((image, index) => (
          <TileImg key={`tile-${index}`} image={image} />
        ))}
        {selectedImages.length < max_kwadros && (
          <AddImages>
            <AddWrapper className="add_icon" onClick={() => setOpen(true)}>
              <AddIcon />
            </AddWrapper>
            <AddOption
              onLoad={(e) => {
                e.preventDefault();
              }}
              className="add_option">
              <FullOptionInputMask tabIndex={0}>
                <FullOptionInput type="file" onChange={onFileChange} multiple accept="image/*" tabIndex={-1} />
              </FullOptionInputMask>
              <CameraIcon />
              <span>Carregar fotos</span>
            </AddOption>
            <AddOption className="add_option" onClick={handleInstagram}>
              <InstagramIcon />
              <span>Importar do Instagram</span>
            </AddOption>
          </AddImages>
        )}
        <ResponsiveButtons onClose={() => setOpen(false)} open={open}>
          <ResponsiveBtn>
            <FullOptionInputMask tabIndex={0}>
              <FullOptionInput
                type="file"
                onChange={(e) => {
                  setOpen(false);
                  onFileChange(e);
                }}
                multiple
                accept="image/*"
                tabIndex={-1}
              />
            </FullOptionInputMask>
            <CameraIcon />
            <span>Carregar fotos</span>
          </ResponsiveBtn>
          <ResponsiveBtn onClick={handleInstagram}>
            <InstagramIcon />
            <span>Importar do Instagram</span>
          </ResponsiveBtn>
        </ResponsiveButtons>
      </Container>
      {selectedImages.length < max_kwadros && (
        <CircleAddBtn onClick={() => setOpen(true)}>
          <AddRounded />
        </CircleAddBtn>
      )}
    </>
  );
}

function readFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default TileImages;
