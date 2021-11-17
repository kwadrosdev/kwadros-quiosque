import React from 'react';
import { Container, FrameList, Frame, FrameName, PopularTag, CheckoutBtn, BtnContainer } from './styles';
import { useSelector, useDispatch } from '@hooks';

import { setCurrentFrame, setCheckoutLoading } from '@modules/review/actions';

import FrameImg from 'next/image';

import boldFrame from 'public/images/frames/boldIcon.png';
import classicFrame from 'public/images/frames/classicIcon.png';
import cleanFrame from 'public/images/frames/cleanIcon.png';
import everFrame from 'public/images/frames/everIcon.png';
import popularBadge from 'public/images/popular.svg';

import { createOrder, uploadFile, updateFileOrder } from 'src/services/api';

const pacotes = {
  clean: 'branco',
  ever: 'branco-com-borda',
  bold: 'preto',
  classic: 'preto-com-borda',
};

function b64toBlob(dataURI: any) {
  var byteString = atob(dataURI.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/png' });
}

function FramePicker() {
  const dispatch = useDispatch();
  const { currentFrame, yampiProducts } = useSelector((state) => state.review);
  const { name, email } = useSelector((state) => state.user);
  const selectedTiles = useSelector((state) => state.review.files);

  async function handleCheckoutClick() {
    try {
      if (selectedTiles.length < 3) {
        return window.alert('Ops... Você deve selecionar pelo menos 3 kwadros para continuar.');
      }

      dispatch(setCheckoutLoading({ payload: true }));
      const { url } = yampiProducts.find(
        (product: { id: 'string'; url: 'string' }) => product.id === `${pacotes[currentFrame]}-${selectedTiles.length}`
      );

      const orderBody = {
        user_name: name,
        user_email: email,
        variant: currentFrame,
      };

      const order = await createOrder(orderBody);

      if (!order) {
        throw new Error('Erro ao criar pedido');
      }

      for (let i = 0; i < selectedTiles.length; i++) {
        const bodyFormData = new FormData();

        const imgFile = b64toBlob(selectedTiles[i].cropped);
        bodyFormData.append('file', imgFile);

        const uploadData = await uploadFile(bodyFormData);
        if (uploadData) {
          await updateFileOrder(uploadData.id, order.id);
        }
      }

      dispatch(setCheckoutLoading({ payload: false }));

      location.href = `${url}?utm_name=${name}&utm_email=${email}`;
    } catch (error) {
      console.log(error);
      dispatch(setCheckoutLoading({ payload: false }));
      window.alert('Ocorreu um erro ao processar a sua compra, por favor, tente novamente!');
    }
  }

  return (
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
        <CheckoutBtn onClick={() => handleCheckoutClick()}>Finalizar Compra</CheckoutBtn>
      </BtnContainer>
    </Container>
  );
}

export default FramePicker;
