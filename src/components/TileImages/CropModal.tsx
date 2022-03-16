import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Point, Area } from 'react-easy-crop/types';

import Image from 'next/image';
import Cropper from 'react-easy-crop';
import Slider from './Slider';

import { useSelector, useDispatch } from '@hooks';
import { Close, Remove, Add } from '@mui/icons-material';

import { closeCropModal, updateTile } from '@modules/review/actions';
import getCroppedImg from 'src/utils/cropImage';
import { db } from 'src/db';

import blackFrame from 'public/images/frames/tile/black.svg';
import whiteFrame from 'public/images/frames/tile/white.svg';

import {
  SliderBtn,
  SliderWrapper,
  SliderContainer,
  CustomDialog,
  CropModalContainer,
  CropModalTitle,
  CloseBtn,
  DoneBtn,
  CropModalContent,
  CropTile,
  CropTileFrame,
  CropTileBase,
  CropperText,
} from './styles';

const initialCroppedArea: Area = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

function CropModal() {
  const dispatch = useDispatch();

  const selectedFrame = useSelector((state) => state.review.currentFrame);

  const { img: image } = useSelector((state) => state.review.cropModal);

  const [imgFrame, setImageFrame] = useState('white');
  const [imgPadding, setImagePadding] = useState(false);
  const [imgOrientation, setImageOrientation] = useState('portrait');

  const [crop, setCrop] = useState<Point>({ x: image.dimensions.x, y: image.dimensions.y });
  const [zoom, setZoom] = useState(image.dimensions.zoom);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(initialCroppedArea);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image.src, croppedAreaPixels, 0);

      const imgFile = {
        id: image.id,
        src: image.src,
        dimensions: {
          x: imgPadding ? crop.x * (262 / 212.5) : crop.x,
          y: imgPadding ? crop.y * (262 / 212.5) : crop.y,
          zoom,
        },
        cropped: croppedImage,
        small: image.small ?? false,
      };

      await db.files.put({ id: imgFile.id, content: imgFile });
      dispatch(
        updateTile({
          payload: imgFile,
        })
      );

      dispatch(closeCropModal());
    } catch (e) {
      console.error(e);
    }
    //eslint-disable-next-line
  }, [croppedAreaPixels]);

  useEffect(() => {
    switch (selectedFrame) {
      case 'ever':
        setImagePadding(true);
        return setImageFrame('white');
      case 'clean':
        setImagePadding(false);
        return setImageFrame('white');
      case 'classic':
        setImagePadding(true);
        return setImageFrame('black');
      case 'bold':
        setImagePadding(false);
        return setImageFrame('black');
      default:
        setImagePadding(false);
        return setImageFrame('white');
    }
  }, [selectedFrame]);

  return (
    <CustomDialog open={true}>
      <CropModalContainer>
        <CropModalTitle>
          <CloseBtn onClick={() => dispatch(closeCropModal())}>
            <Close />
          </CloseBtn>
          <h3>Ajustar Imagem</h3>
          <DoneBtn onClick={() => handleCrop()}>Feito</DoneBtn>
        </CropModalTitle>
        <CropModalContent hasPadding={imgPadding} orientation={imgOrientation}>
          <CropperText responsive={true}>Pince e arraste para posicionar</CropperText>
          <CropperText responsive={false}>Arraste para posicionar</CropperText>

          <Cropper
            image={image.src ?? undefined}
            crop={crop}
            zoom={zoom}
            minZoom={1}
            maxZoom={3}
            aspect={1 / 1}
            cropSize={{
              width: imgPadding ? 212.5 : 262,
              height: imgPadding ? 212.5 : 262,
            }}
            onMediaLoaded={({ naturalWidth, naturalHeight }) => {
              if (naturalWidth > naturalHeight) {
                return setImageOrientation('landscape');
              }
              return setImageOrientation('portrait');
            }}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <CropTile>
            <CropTileBase className="tile_base" />
            <CropTileFrame>
              {imgFrame === 'black' && <Image alt="black_frame" draggable={false} src={blackFrame} layout="intrinsic" />}
              {imgFrame === 'white' && <Image alt="white_frame" draggable={false} src={whiteFrame} layout="intrinsic" />}
            </CropTileFrame>
          </CropTile>
          <SliderContainer>
            <SliderWrapper>
              <SliderBtn
                onClick={() => {
                  if (Number(zoom) <= 1) {
                    return setZoom(1);
                  }
                  return setZoom(Number(zoom) - 0.1);
                }}>
                <Remove />
              </SliderBtn>
              <Slider
                min={1}
                value={zoom}
                max={3}
                step={0.1}
                onChange={(e, zoom) => {
                  setZoom(Number(zoom));
                }}
                aria-labelledby="Zoom"
              />
              <SliderBtn
                onClick={() => {
                  if (Number(zoom) >= 3) {
                    return setZoom(3);
                  }
                  return setZoom(Number(zoom) + 0.1);
                }}>
                <Add />
              </SliderBtn>
            </SliderWrapper>
          </SliderContainer>
        </CropModalContent>
      </CropModalContainer>
    </CustomDialog>
  );
}

export default CropModal;
