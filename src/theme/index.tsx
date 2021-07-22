import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Proxima Nova";
    src: url("/fonts/ProximaNova/ProximaNova-Regular.woff2");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Proxima Nova";
    src: url("/fonts/ProximaNova/ProximaNova-Medium.woff2");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Proxima Nova";
    src: url("/fonts/ProximaNova/ProximaNova-Semibold.woff2");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Proxima Nova";
    src: url("/fonts/ProximaNova/ProximaNova-Bold.woff2");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Proxima Nova";
    src: url("/fonts/ProximaNova/ProximaNova-ExtraBold.woff2");
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }

  .slide {
    min-width: 359px;
    padding: 0px 12px;

    @media screen and (max-width: 464px) {
      min-width: 306px;
      padding: 0px 8px;
    }
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }

  html, body {
    padding: 0;
    margin: 0;
    min-height: 100% !important;
    height: 100%;
  }

  h1,h2,h3,h4,h5 {
    margin: 0px;
  }

  h2 {
    letter-spacing: -.06em;
    line-height: 62px;
    font-size: 62px;
    font-weight: 700px;
  }

  h4 {
    line-height: 22px;
    font-size: 18px;
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border-radius: 5px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  * {
    box-sizing: border-box;
    font-family: "Proxima Nova", sans-serif;
    color: #333;
  }


`;

const theme = {
  colors: {
    primary: '#8A199C',
    black: '#333',
  },
};

export default theme;
