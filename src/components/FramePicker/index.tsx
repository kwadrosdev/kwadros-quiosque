import React, { useEffect } from 'react';

import { Container, FrameList, Frame, FrameName, PopularTag, CheckoutBtn, BtnContainer } from './styles';
import { useSelector, useDispatch } from '@hooks';

import { setCurrentFrame } from '@modules/review/actions';

import FrameImg from 'next/image';

import boldFrame from 'public/images/frames/boldIcon.png';
import classicFrame from 'public/images/frames/classicIcon.png';
import cleanFrame from 'public/images/frames/cleanIcon.png';
import everFrame from 'public/images/frames/everIcon.png';
import popularBadge from 'public/images/popular.svg';

function FramePicker() {
  const dispatch = useDispatch();
  const { currentFrame, yampiProducts } = useSelector((state) => state.review);
  const tilesCount = useSelector((state) => state.review.files.length);

  function handleCheckoutClick() {
    try {
      if (tilesCount < 3) {
        return window.alert('Ops... Você deve selecionar pelo menos 3 kwadros para continuar.');
      }

      const { url } = yampiProducts.find(
        (product: { id: 'string'; url: 'string' }) => product.id === `${currentFrame}-pacote-${tilesCount}`
      );
      window.open(url);
    } catch (error) {
      window.alert('Ocorreu um erro ao processar a sua compra, por favor, tente novamente!');
    }
  }

  return (
    <Container>
      <FrameList>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'ever' }))} selected={currentFrame === 'ever'}>
          <FrameImg src={everFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>ever</span>
            <PopularTag img={popularBadge}>Popular</PopularTag>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'clean' }))} selected={currentFrame === 'clean'}>
          <FrameImg src={cleanFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>clean</span>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'classic' }))} selected={currentFrame === 'classic'}>
          <FrameImg src={classicFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>classic</span>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'bold' }))} selected={currentFrame === 'bold'}>
          <FrameImg src={boldFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>bold</span>
          </FrameName>
        </Frame>
      </FrameList>
      <BtnContainer>
        <CheckoutBtn onClick={() => handleCheckoutClick()}>Checkout</CheckoutBtn>
      </BtnContainer>
    </Container>
  );
}

export default FramePicker;
