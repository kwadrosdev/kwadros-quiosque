import React from 'react';
import { Container, FrameList, Frame, FrameName, PopularTag, CheckoutBtn, BtnContainer } from './styles';
import { useSelector, useDispatch } from '@hooks';

import { setCurrentFrame, setOpenCheckoutPreview } from '@modules/review/actions';

import FrameImg from 'next/image';

import boldFrame from 'public/images/frames/boldIcon.png';
import classicFrame from 'public/images/frames/classicIcon.png';
import cleanFrame from 'public/images/frames/cleanIcon.png';
import everFrame from 'public/images/frames/everIcon.png';
import popularBadge from 'public/images/popular.svg';

import CheckoutPreview from './CheckoutPreview';

import { pacotes } from 'src/utils/constants';

function FramePicker() {
  const dispatch = useDispatch();
  const { currentFrame, yampiProducts } = useSelector((state) => state.review);
  const selectedTiles = useSelector((state) => state.review.files);

  async function handleCheckoutPreview() {
    try {
      if (selectedTiles.length < 3) {
        return window.alert('Ops... Você deve selecionar pelo menos 3 kwadros para continuar.');
      }

      const { url, price } = yampiProducts.find(
        (product: { id: 'string'; url: 'string' }) => product.id === `${pacotes[currentFrame]}-${selectedTiles.length}`
      );

      dispatch(setOpenCheckoutPreview({ payload: { open: true, url, price } }));
    } catch (error) {
      dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null } }));
      window.alert('Ocorreu um erro ao processar a sua compra, por favor, tente novamente!');
    }
  }

  return (
    <>
      <Container>
        <FrameList>
          <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'ever' }))} selected={currentFrame === 'ever'}>
            <FrameImg src={everFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
            <FrameName>
              <span>Branco com borda</span>
              <PopularTag img={popularBadge}>Popular</PopularTag>
            </FrameName>
          </Frame>
          <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'clean' }))} selected={currentFrame === 'clean'}>
            <FrameImg src={cleanFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
            <FrameName>
              <span>Branco</span>
            </FrameName>
          </Frame>
          <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'classic' }))} selected={currentFrame === 'classic'}>
            <FrameImg src={classicFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
            <FrameName>
              <span>Preto com borda</span>
            </FrameName>
          </Frame>
          <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'bold' }))} selected={currentFrame === 'bold'}>
            <FrameImg src={boldFrame} draggable={false} width={'65px'} height={'65px'} objectFit="contain" layout="fixed" />
            <FrameName>
              <span>Preto</span>
            </FrameName>
          </Frame>
        </FrameList>
        <BtnContainer>
          <CheckoutBtn onClick={() => handleCheckoutPreview()}>Finalizar Compra</CheckoutBtn>
        </BtnContainer>
      </Container>
      <CheckoutPreview />
    </>
  );
}

export default FramePicker;
