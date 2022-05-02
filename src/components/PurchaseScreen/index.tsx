import React from 'react';
import { Container, DismissBtn } from './styles';
import { setPurchaseScreenOpen } from '@modules/review/actions';
import { useDispatch, useSelector } from '@hooks';
import { ShoppingCartCheckout } from '@mui/icons-material';

export default function PurchaseScreen() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.review.purchaseScreenOpen);

  if (!isOpen) {
    return <></>;
  }

  return (
    <Container>
      <ShoppingCartCheckout />
      <h3>Prontinho, seu pedido foi realizado com sucesso, para retirá-lo basta ir ao quiosque mais próximo.</h3>
      <DismissBtn onClick={() => dispatch(setPurchaseScreenOpen({ payload: false }))}>Entendido</DismissBtn>
    </Container>
  );
}
