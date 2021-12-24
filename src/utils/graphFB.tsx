import React from 'react';
import Script from 'next/script';

export default function graphFB() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
                  FB.init({
                    appId      : ${process.env.NEXT_PUBLIC_FB_APP_ID},
                    xfbml      : true,
                    version    : 'v11.0'
                  });
                  FB.AppEvents.logPageView();
                  
                  };

                  (function(d, s, id){
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {return;}
                    js = d.createElement(s); js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
      <div id="fb-root"></div>
      <Script
        strategy="lazyOnload"
        async
        crossOrigin="anonymous"
        defer
        src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=340829074298399&autoLogAppEvents=1"
        nonce="etIT1BPs"></Script>
    </>
  );
}
