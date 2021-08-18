import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from '@hooks';

import Image from 'next/image';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { getCroppedImg, getRotatedImage } from './canvasUtils';
import { styles } from './materialStyles';
import { Point, Area } from 'react-easy-crop/types';

import { setImgFiles } from '@modules/review/actions';

import TileImages from '@components/TileImages';

import {
  Container,
  GetStartedContainer,
  OptionsContainer,
  FullOptionInput,
  FullOptionInputMask,
  FullOption,
  CameraIcon,
  FacebookIcon,
  InstagramIcon,
  Divider,
  CloudOption,
  CloudOptionsGroup,
} from './styles';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function SelectionSection() {
  const dispatch = useDispatch();

  const imgFiles = useSelector((state) => state.review.files);

  const [imageSrc, setImageSrc] = React.useState('');
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      console.log('donee', { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const onFileChange = async (e: HTMLInputEvent) => {
    console.log('files', e.target.files);

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
            <CloudOptionsGroup>
              <CloudOption>
                <FacebookIcon />
                <span>Importar do Facebook</span>
              </CloudOption>
              <CloudOption>
                <InstagramIcon />
                <span>Importar do Instagram</span>
              </CloudOption>
            </CloudOptionsGroup>
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
