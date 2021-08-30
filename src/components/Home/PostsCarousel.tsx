import React from 'react';
import styled from 'styled-components';
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

const DotItem = styled('div')<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0px 6px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : '#ccc')};
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

  &:hover {
    box-shadow: 0 3px 12px ${({ theme }) => `${theme.colors.primary}4C`};
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

const DotsGroup = ({ onClick, active }: DotProps) => {
  return (
    <DotItem
      active={active!}
      onClick={onClick}></DotItem>
  );
};

const breakpoints = {
  mobile: {
    breakpoint: {
      max: 9999,
      min: 0,
    },
    items: 5,
  },
};

function Home() {
  const { responsive } = useSelector((state) => state.platform);

  return (
    <Container>
      <Carousel
        ssr
        centerMode={true}
        isResponsive={responsive}
        arrows={false}
        showDots={responsive}
        itemClass="rc-slide"
        sliderClass="rc-slider"
        dotListClass="rc-dotlist"
        swipeable
        infinite
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        customButtonGroup={<ButtonGroup />}
        customDot={<DotsGroup />}
        deviceType={'mobile'}
        slidesToSlide={1}
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
