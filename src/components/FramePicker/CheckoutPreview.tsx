import React from 'react';
import { useSelector, useDispatch } from '@hooks';

import { Drawer, PreviewContainer, PreviewTitle, CheckoutBtn } from './styles';

import { setCheckoutLoading, setOpenCheckoutPreview, setPurchaseScreenOpen } from '@modules/review/actions';

import { formatPrice } from 'src/utils/common_functions';
import { uploadFile, updateFileOrder, createTransaction, createOrder } from 'src/services/api';
import { db } from 'src/db';

function CheckoutPreview() {
  const dispatch = useDispatch();

  const { open, price, extraPrice, extraKwadros, url } = useSelector((state) => state.review.checkoutPreview);
  const { currentFrame, files: selectedTiles } = useSelector((state) => state.review);
  const { desktop } = useSelector((state) => state.platform);

  const { name, email } = useSelector((state) => state.user);

  async function handleCheckoutClick() {
    try {
      dispatch(setCheckoutLoading({ payload: true }));
      dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null, extraPrice: null, extraKwadros: null } }));

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

      await db.transactions.clear();
      await db.orders.clear();
      await db.files.clear();

      dispatch(setCheckoutLoading({ payload: false }));
      dispatch(setPurchaseScreenOpen({ payload: true }));
    } catch (error) {
      dispatch(setCheckoutLoading({ payload: false }));
      dispatch(setPurchaseScreenOpen({ payload: false }));
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
