import '@components/Carousel/styles.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { initStore } from '../store';

import type { AppProps } from 'next/app';

import ReduxInitiator from '../utils/reduxInitiator';
import ResizeListener from '../utils/resizeListener';
import Yampi from '../utils/yampi';
import FB from '../utils/graphFB';
import WhatsAppBtn from '@components/WhatsAppBtn';

import theme, { GlobalStyle } from 'src/theme';

import { DefaultSeo } from 'next-seo';
import SEO from '../utils/next-seo.config';

import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <Provider store={initStore}>
        <ThemeProvider theme={theme}>
          <ReduxInitiator>
            <DefaultSeo {...SEO} />
            <ResizeListener />
            <Yampi />
            <FB />
            <WhatsAppBtn />
            <Component {...pageProps} />
          </ReduxInitiator>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default MyApp;
