import '@components/Carousel/styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { initStore, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

import type { AppProps } from 'next/app';

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
  return (
    <>
      <GlobalStyle />
      <Provider store={initStore}>
        <ThemeProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          <Yampi />
          <FB />
          <ResizeListener />
          <WhatsAppBtn />
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default MyApp;
