import React, { useEffect } from 'react';
import Script from 'next/script';
import { useDispatch } from '@hooks';
import { setYampiProducts, setMaxKwadros } from '@modules/review/actions';

function Yampi() {
  const dispatch = useDispatch();

  useEffect(() => {
    const _yampi = (window as any).yampiProduct;

    const yampiProducts = _yampi?.resource?.data?.skus.map((sku: any) => {
      return { id: sku?.variations.length && sku?.variations[0].value, url: sku.purchase_url, price: sku.price_sale };
    });

    const maxKwadros = Math.floor(yampiProducts.length / 4 + 2);

    dispatch(setMaxKwadros({ payload: maxKwadros }));
    dispatch(setYampiProducts({ payload: yampiProducts }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script className="ymp-script" strategy="beforeInteractive" src={process.env.NEXT_PUBLIC_YAMPI_BASE_URL} />
    </>
  );
}

export default Yampi;
