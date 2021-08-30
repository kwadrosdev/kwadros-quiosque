import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useDispatch } from '@hooks';
import { setYampiProducts } from '@modules/review/actions';

function Yampi() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window && loaded) {
      const _yampi = (window as any).yampiProduct;

      const yampiProducts = _yampi?.resource?.data?.skus.map((sku: any) => {
        return { id: sku?.variations.length && sku?.variations[0].value, url: sku.purchase_url };
      });

      dispatch(setYampiProducts({ payload: yampiProducts }));
    }
  }, [loaded]);

  return (
    <>
      <Script
        className="ymp-script"
        strategy="lazyOnload"
        src="https://api.dooki.com.br/v2/teste2/public/buy-button/QP1RVLKW82/js"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export default Yampi;
