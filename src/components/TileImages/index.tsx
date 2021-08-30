import React, { useState } from 'react';
import { useDispatch } from '@hooks';

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
import { setImgFiles } from '@modules/review/actions';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function TileImages({ selectedImages }: { selectedImages: any[] }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles = [];

    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        let fileData: any = await readFile(e.target.files[i]);
        _imgFiles.push({ src: fileData, dimensions: { x: 0, y: 0, zoom: 1 } });
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
  };

  return (
    <Container>
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
        <AddOption className="add_option">
          <FacebookIcon />
          <span>Importar do Facebook</span>
        </AddOption>
        <AddOption className="add_option">
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
          <AddOption className="add_option">
            <FacebookIcon />
            <span>Importar do Facebook</span>
          </AddOption>
          <AddOption className="add_option">
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
        <ResponsiveBtn>
          <FacebookIcon />
          <span>Importar do Facebook</span>
        </ResponsiveBtn>
        <ResponsiveBtn>
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
