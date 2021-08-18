import React from 'react';
import { useDispatch, useSelector } from '@hooks';

import {
  Container,
  AddImages,
  AddIcon,
  CameraIcon,
  FacebookIcon,
  InstagramIcon,
  AddOption,
  FullOptionInputMask,
  FullOptionInput,
} from './styles';

import TileImg from './TileImg';
import { setImgFiles } from '@modules/review/actions';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function TileImages({ selectedImages }: { selectedImages: any[] }) {
  const dispatch = useDispatch();

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles = [];

    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        let fileData: any = await readFile(e.target.files[i]);
        _imgFiles.push(fileData);
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
  };

  return (
    <Container>
      <AddImages className="add_responsive">
        <AddIcon className="add_icon" />
        <AddOption className="add_option">
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
      {selectedImages.map((image, index) => (
        <TileImg key={`tile-${index}`} image={image} />
      ))}
      <AddImages>
        <AddIcon className="add_icon" />
        <AddOption className="add_option">
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
