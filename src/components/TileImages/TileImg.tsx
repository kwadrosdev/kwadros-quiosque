import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from '@hooks';
import { openCropModal, handleDeleteTile } from '@modules/review/actions';
import Image from 'next/image';
import Cropper from 'react-easy-crop';

import blackFrame from 'public/images/frames/tile/black.svg';
import whiteFrame from 'public/images/frames/tile/white.svg';

import { TileContainer, TileFrame, ImgContainer, TileBase, TileBtnsContainer, TileBtn, ResponsiveBtn, ResponsiveButtons } from './styles';
import { DeleteOutline, Crop } from '@material-ui/icons';
import image from 'next/image';

function TileImg({ image, index }: { image: any; index: number }) {
  const dispatch = useDispatch();

  const selectedFrame = useSelector((state) => state.review.currentFrame);

  const [imgFrame, setImageFrame] = useState('white');
  const [imgPadding, setImagePadding] = useState(false);
  const [ratio, setRatio] = useState(262 / 223);
  const [imgOrientation, setImageOrientation] = useState('portrait');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    switch (selectedFrame) {
      case 'ever':
        setImagePadding(true);
        setRatio((262 / 212.5) * (212.5 / 177));
        return setImageFrame('white');
      case 'clean':
        setImagePadding(false);
        setRatio(262 / 223);
        return setImageFrame('white');
      case 'classic':
        setImagePadding(true);
        setRatio((262 / 212.5) * (212.5 / 177));
        return setImageFrame('black');
      case 'bold':
        setImagePadding(false);
        setRatio(262 / 223);
        return setImageFrame('black');
      default:
        setImagePadding(false);
        setRatio(262 / 223);
        return setImageFrame('white');
    }
  }, [selectedFrame]);

  return (
    <>
      <TileContainer>
        <TileBase className="tile_base" />
        <TileBtnsContainer className="tile_btns">
          <TileBtn onClick={() => dispatch(openCropModal({ payload: index }))}>
            <Crop />
          </TileBtn>
          <TileBtn onClick={() => dispatch(handleDeleteTile({ payload: index }))}>
            <DeleteOutline />
          </TileBtn>
        </TileBtnsContainer>
        <TileFrame onClick={() => setOpen(true)}>
          {imgFrame === 'black' && <Image alt="black_frame" draggable={false} src={blackFrame} layout="intrinsic" />}
          {imgFrame === 'white' && <Image alt="white_frame" draggable={false} src={whiteFrame} layout="intrinsic" />}
        </TileFrame>
        <ImgContainer className="tile_base" hasPadding={imgPadding} orientation={imgOrientation}>
          <Cropper
            image={image.src}
            crop={{ x: image.dimensions.x / ratio, y: image.dimensions.y / ratio }}
            zoom={image.dimensions.zoom}
            restrictPosition={false}
            minZoom={1}
            maxZoom={3}
            aspect={1}
            cropSize={{
              width: imgPadding ? 177 : 223,
              height: imgPadding ? 177 : 223,
            }}
            onMediaLoaded={({ naturalWidth, naturalHeight }) => {
              if (naturalWidth > naturalHeight) {
                return setImageOrientation('landscape');
              }
              return setImageOrientation('portrait');
            }}
            onCropChange={() => {}}
            onCropComplete={() => {}}
            onZoomChange={() => {}}
          />
        </ImgContainer>
      </TileContainer>
      <ResponsiveButtons onClose={() => setOpen(false)} open={open}>
        <ResponsiveBtn
          onClick={() => {
            setOpen(false);
            dispatch(openCropModal({ payload: index }));
          }}>
          <Crop />
          <span>Ajustar Imagem</span>
        </ResponsiveBtn>
        <ResponsiveBtn
          onClick={() => {
            setOpen(false);
            dispatch(handleDeleteTile({ payload: index }));
          }}>
          <DeleteOutline />
          <span>Remover Kwadro</span>
        </ResponsiveBtn>
      </ResponsiveButtons>
    </>
  );
}

export default TileImg;
