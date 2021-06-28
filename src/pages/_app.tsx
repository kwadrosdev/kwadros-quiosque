import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import Layout from '@components/Layout/index';
import theme, { GlobalStyle } from 'src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
