import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MobileDetect from 'mobile-detect';
import { useSelector } from '@hooks';

import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

import Card from './CarouselCard';

import Carousel from '../Carousel';
import { ButtonGroupProps, DotProps } from '../Carousel/types';

import img1 from 'public/images/hero_image_1@2x.jpg';
import img2 from 'public/images/hero_image_2@2x.jpg';
import img3 from 'public/images/hero_image_3@2x.jpg';
import imgalt from 'public/images/kid_kwadros.jpg';

const Container = styled.div`
  margin-top: 36px;
  width: 100%;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  & * {
    -webkit-touch-callout: none !important; /* iOS Safari */
    -webkit-user-select: none !important; /* Safari */
    -khtml-user-select: none !important; /* Konqueror HTML */
    -moz-user-select: none !important; /* Old versions of Firefox */
    -ms-user-select: none !important; /* Internet Explorer/Edge */
    user-select: none !important; /* Non-prefixed version, currently */
  }
`;

const BtnContainer = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    width: 100%;
    max-width: 100%;
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LeftBtnContainer = styled.div`
  width: 200px;
  height: 460px;
  padding-left: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(90deg, #fff 25%, hsla(0, 0%, 100%, 0));
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

const RightBtnContainer = styled.div`
  width: 200px;
  height: 460px;
  padding-right: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 75%);
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

const CustomIconBtn = styled(IconButton)`
  box-shadow: 0px 0px 12px #ddd;
  background: #fff !important;
  width: 48px;
  height: 48px;

  &:hover {
    background: rgb(246, 246, 246) !important;
  }

  & svg {
    fill: ${({ theme }) => theme.colors.primary} !important;
  }
`;

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <BtnContainer>
      <LeftBtnContainer>
        <CustomIconBtn onClick={previous} draggable={false}>
          <ArrowBack />
        </CustomIconBtn>
      </LeftBtnContainer>
      <RightBtnContainer>
        <CustomIconBtn onClick={next} draggable={false}>
          <ArrowForward />
        </CustomIconBtn>
      </RightBtnContainer>
    </BtnContainer>
  );
};

const DotsGroup = ({}: DotProps) => {
  return <></>;
};

const breakpoints = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1440,
    },
    items: 5,
  },
  laptopL: {
    breakpoint: {
      max: 1440,
      min: 1024,
    },
    items: 5,
  },
  laptop: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 5,
  },
  tablet: {
    breakpoint: {
      max: 768,
      min: 464,
    },
    items: 5,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 5,
  },
};

function Home() {
  const [deviceType, setDeviceType] = useState('mobile');
  const { responsive } = useSelector((state) => state.platform);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      setDeviceType('tablet');
    } else if (md.mobile()) {
      setDeviceType('mobile');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return (
    <Container>
      <Carousel
        ssr
        centerMode={true}
        isResponsive={responsive}
        arrows={false}
        itemClass="slide"
        sliderClass="slider"
        draggable
        infinite
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        customDot={<DotsGroup />}
        deviceType={deviceType}
        slidesToSlide={1}
        swipeable
        responsive={breakpoints}>
        <Card imgSrc={img1} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={img2} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={imgalt} />
        <Card imgSrc={img3} />
      </Carousel>
    </Container>
  );
}

export default Home;
