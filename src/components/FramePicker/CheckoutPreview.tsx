import React from 'react';
import { useSelector, useDispatch } from '@hooks';

import { Drawer, PreviewContainer, PreviewTitle, BtnContainer, CheckoutBtn } from './styles';

import { setCheckoutLoading, setOpenCheckoutPreview } from '@modules/review/actions';
import { createOrder, uploadFile, updateFileOrder } from 'src/services/api';

import { formatPrice, b64toBlob } from 'src/utils/common_functions';
import { pacotes } from 'src/utils/constants';

function CheckoutPreview() {
  const dispatch = useDispatch();

  const { open, price, url } = useSelector((state) => state.review.checkoutPreview);
  const { desktop } = useSelector((state) => state.platform);
  const selectedTiles = useSelector((state) => state.review.files);

  const { currentFrame, yampiProducts } = useSelector((state) => state.review);
  const { name, email } = useSelector((state) => state.user);

  async function handleCheckoutClick() {
    try {
      dispatch(setCheckoutLoading({ payload: true }));
      dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null } }));
      
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
      dispatch(setCheckoutLoading({ payload: false }));
      window.alert('Ocorreu um erro ao processar a sua compra, por favor, tente novamente!');
    }
  }

  return (
    <React.Fragment>
      <Drawer
        anchor={desktop ? 'right' : 'bottom'}
        open={open}
        onClose={() => dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null } }))}
        onOpen={() => dispatch(setOpenCheckoutPreview({ payload: { open: true, url, price } }))}>
        <PreviewContainer>
          <PreviewTitle>Checkout</PreviewTitle>
          <div className="divider" />

          <div className="price-container">
            <div className="price">
              <span>{selectedTiles.length} kwadros por</span>
              <span>{formatPrice(price)}</span>
            </div>
            <div className="price">
              <span>Frete</span>
              <span>
                <b>Grátis</b>
              </span>
            </div>
          </div>

          <CheckoutBtn onClick={() => handleCheckoutClick()}>Finalizar Compra</CheckoutBtn>
        </PreviewContainer>
      </Drawer>
    </React.Fragment>
  );
}

export default CheckoutPreview;
