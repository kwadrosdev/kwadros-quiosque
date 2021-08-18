import React, { useEffect, useState } from 'react';
import { useSelector } from '@hooks';
import Image from 'next/image';

import blackFrame from 'public/images/frames/tile/black.svg';
import whiteFrame from 'public/images/frames/tile/white.svg';

import { TileContainer, TileFrame, ImgContainer, TileBase } from './styles';

function TileImg({ image }: { image: any }) {
  const selectedFrame = useSelector((state) => state.review.currentFrame);
  const [imgFrame, setImageFrame] = useState('white');
  const [imgPadding, setImagePadding] = useState(false);

  useEffect(() => {
    console.log('selectedFrame', selectedFrame);
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
    <TileContainer>
      <TileBase className="tile_base" />
      <TileFrame>
        {imgFrame === 'black' && <Image alt="black_frame" draggable={false} src={blackFrame} layout="intrinsic" />}
        {imgFrame === 'white' && <Image alt="white_frame" draggable={false} src={whiteFrame} layout="intrinsic" />}
      </TileFrame>
      <ImgContainer className="tile_base" hasPadding={imgPadding}>
        <Image alt="tile_img" draggable={false} src={image} layout="fill" objectFit="cover" />
      </ImgContainer>
      {/* <ImgContainer> */}
      {/* </ImgContainer> */}
    </TileContainer>
  );
}

export default TileImg;
