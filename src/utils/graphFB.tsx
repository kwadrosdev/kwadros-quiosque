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
      <Script
        id="fb-pixel-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '452911339916412');
            fbq('track', 'PageView');`,
        }}
      />
      <Script
        id="fb-pixel-script-2"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '658940098513203');
            fbq('track', 'PageView');`,
        }}
      />
    </>
  );
}
