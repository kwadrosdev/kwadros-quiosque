import '@components/Carousel/styles.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { initStore } from '../store';

import type { AppProps } from 'next/app';

import Layout from '@components/Layout/index';
import ResizeListener from '../utils/resizeListener';

import theme, { GlobalStyle } from 'src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={initStore}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <ResizeListener />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default MyApp;
