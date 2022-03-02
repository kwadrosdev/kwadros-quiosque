import React from 'react';
import Script from 'next/script';

export default function graphFB() {
  return (
    <>
      <div id="fb-root"></div>
      <Script
        strategy="lazyOnload"
        async
        crossOrigin="anonymous"
        defer
        src={`https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=${process.env.NEXT_PUBLIC_FB_APP_ID}&autoLogAppEvents=1`}
        nonce="etIT1BPs"
      />
      
    </>
  );
}
