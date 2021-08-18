import '@components/Carousel/styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { initStore, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

import type { AppProps } from 'next/app';

import ResizeListener from '../utils/resizeListener';

import theme, { GlobalStyle } from 'src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={initStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <ResizeListener />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
