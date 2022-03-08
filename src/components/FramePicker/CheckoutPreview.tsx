import React from 'react';
import { useSelector, useDispatch } from '@hooks';

import { Drawer, PreviewContainer, PreviewTitle, CheckoutBtn } from './styles';

import { setCheckoutLoading, setOpenCheckoutPreview } from '@modules/review/actions';

import { formatPrice } from 'src/utils/common_functions';

function CheckoutPreview() {
  const dispatch = useDispatch();

  const { open, price, extraPrice, extraKwadros, url } = useSelector((state) => state.review.checkoutPreview);
  const { desktop } = useSelector((state) => state.platform);

  const { name, email } = useSelector((state) => state.user);

  async function handleCheckoutClick() {
    try {
      dispatch(setCheckoutLoading({ payload: true }));
      dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null, extraPrice: null, extraKwadros: null } }));

      setTimeout(() => {
        dispatch(setCheckoutLoading({ payload: false }));
        location.href = `${url}?utm_name=${name}&utm_email=${email}`;
      }, 2000);
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
        onClose={() =>
          dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null, extraPrice: null, extraKwadros: null } }))
        }
        onOpen={() => dispatch(setOpenCheckoutPreview({ payload: { open: true, url, price, extraPrice, extraKwadros } }))}>
        <PreviewContainer>
          <PreviewTitle>Checkout</PreviewTitle>
          <div className="divider" />

          <div className="price-container">
            <div className="price">
              <span>3 kwadros por</span>
              <span>{formatPrice(price)}</span>
            </div>
            {extraKwadros && extraPrice ? (
              <>
                <div className="price">
                  <span>{`${extraKwadros} ${extraKwadros > 1 ? 'kwadros adicionais' : 'kwadro adicional'}`}</span>
                  <span>{`${formatPrice(extraPrice)}`}</span>
                </div>
              </>
            ) : (
              ''
            )}
            <div className="price">
              <span>Frete</span>
              <span>Grátis*</span>
            </div>
            <span className="subscript">
              {'*Frete grátis para capitais e regiões metropolitanas, as demais regiões tem frete fixo de R$25'}
            </span>
            <div className="price" style={{ marginTop: '8px' }}>
              <span>
                <b>Total</b>
              </span>
              <span>
                <b>{formatPrice(Number(price) + Number(extraPrice))}</b>
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
