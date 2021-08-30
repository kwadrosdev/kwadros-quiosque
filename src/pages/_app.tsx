import '@components/Carousel/styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { initStore, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

import type { AppProps } from 'next/app';

import ResizeListener from '../utils/resizeListener';
import Yampi from '../utils/yampi';

import theme, { GlobalStyle } from 'src/theme';

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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Yampi />
            <ResizeListener />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
