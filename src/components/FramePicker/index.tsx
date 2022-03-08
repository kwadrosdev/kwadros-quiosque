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

import { uploadFile, updateFileOrder, createTransaction, createOrder } from 'src/services/api';
import { db } from 'src/db';

import { pacotes } from 'src/utils/constants';

function FramePicker() {
  const dispatch = useDispatch();
  const { currentFrame, yampiProducts, max_kwadros } = useSelector((state) => state.review);
  const { name, email } = useSelector((state) => state.user);
  const selectedTiles = useSelector((state) => state.review.files);

  async function handleOrder() {
    try {
      const orderBody = {
        user_name: name,
        user_email: email,
        variant: currentFrame,
      };

      const order = await createOrder(orderBody);
      if (!order) {
        throw new Error('Erro ao criar Order');
      }

      const transaction = await createTransaction(selectedTiles.length);
      if (!transaction) {
        throw new Error('Erro ao criar Transaction');
      }

      await db.transactions.put({ id: 'transactionID', transaction });
      await db.orders.put({ id: 'orderID', order: order.id });

      const uploadPromisses: Promise<any>[] = [];
      for (let i = 0; i < selectedTiles.length; i++) {
        const body = {
          name: selectedTiles[i].id,
          file: selectedTiles[i].cropped,
        };

        uploadPromisses.push(uploadFile(body));
      }
      const uploadedFiles = await Promise.all(uploadPromisses);

      const updateFilePromises: Promise<any>[] = [];
      for (const file of uploadedFiles) {
        if (file !== null) {
          const body = {
            secure_url: file.secure_url,
            asset_id: file.asset_id,
            transaction,
            order: order.id,
          };
          updateFilePromises.push(updateFileOrder(body));
        }
      }
      await Promise.all(updateFilePromises);
    } catch (error) {
      console.log(error);
      window.alert(`Ocorreu um erro ao processar a sua compra: ${error}`);
    }
  }

  async function handleCheckoutPreview() {
    try {
      if (selectedTiles.length < 3) {
        return window.alert('Ops... Você deve selecionar pelo menos 3 kwadros para continuar.');
      } else if (selectedTiles.length > max_kwadros) {
        return window.alert(`Ops... Você deve selecionar no máximo ${max_kwadros} kwadros para continuar.`);
      }

      const { price: minPrice } = yampiProducts.find(
        (product: { id: 'string'; url: 'string' }) => product.id === `${pacotes[currentFrame]}-3`
      );
      const { url, price } = yampiProducts.find(
        (product: { id: 'string'; url: 'string' }) => product.id === `${pacotes[currentFrame]}-${selectedTiles.length}`
      );

      let extraPrice = 0;
      let extraKwadros = 0;

      if (selectedTiles.length !== 3) {
        extraPrice = price - minPrice;
        extraKwadros = selectedTiles.length - 3;
      }

      dispatch(setOpenCheckoutPreview({ payload: { open: true, url, price: minPrice, extraPrice, extraKwadros } }));
      handleOrder();
    } catch (error) {
      window.alert('Error: ' + error);
      dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null, extraPrice: null, extraKwadros: null } }));
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
