import React, { useState } from 'react';
import { useDispatch, useSelector } from '@hooks';

import {
  Container,
  AddImages,
  AddWrapper,
  AddIcon,
  CameraIcon,
  FacebookIcon,
  InstagramIcon,
  AddOption,
  FullOptionInputMask,
  FullOptionInput,
  ResponsiveButtons,
  ResponsiveBtn,
} from './styles';

import TileImg from './TileImg';

import { setImgFiles, setInstagramImages, setInstagramModalOpen, setInstagramLoading, setInstagramNextPage } from '@modules/review/actions';

import api from 'src/services/api';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}


function TileImages({ selectedImages }: { selectedImages: any[] }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

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
    } catch (error) {
      dispatch(setInstagramLoading({ payload: false }));
      dispatch(setInstagramModalOpen({ payload: false }));
      dispatch(setInstagramImages({ payload: [] }));
    }
  }

  return (
    <Container className="thin-scrollbar">
      <AddImages className="add_responsive">
        <AddWrapper className="add_icon" onClick={() => setOpen(true)}>
          <AddIcon />
        </AddWrapper>
        <AddOption className="add_option">
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
        </AddOption>
        <AddOption className="add_option" onClick={handleInstagram}>
          <InstagramIcon />
          <span>Importar do Instagram</span>
        </AddOption>
      </AddImages>
      {selectedImages.map((image, index) => (
        <TileImg key={`tile-${index}`} index={index} image={image} />
      ))}
      {selectedImages.length < 9 && (
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
