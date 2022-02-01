import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useDispatch } from '@hooks';
import { setYampiProducts, setMaxKwadros } from '@modules/review/actions';

function Yampi() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window && loaded) {
      const _yampi = (window as any).yampiProduct;

      const yampiProducts = _yampi?.resource?.data?.skus.map((sku: any) => {
        return { id: sku?.variations.length && sku?.variations[0].value, url: sku.purchase_url, price: sku.price_sale };
      });

      const maxKwadros = Math.floor(yampiProducts.length / 4 + 2);

      dispatch(setMaxKwadros({ payload: maxKwadros }));
      dispatch(setYampiProducts({ payload: yampiProducts }));
    }
    //eslint-disable-next-line
  }, [loaded]);

  return (
    <>
      <Script className="ymp-script" strategy="lazyOnload" src={process.env.NEXT_PUBLIC_YAMPI_BASE_URL} onLoad={() => setLoaded(true)} />
    </>
  );
}

export default Yampi;
