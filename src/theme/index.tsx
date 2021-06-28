import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Thin.ttf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-ThinItalic.ttf");
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-ExtraLight.ttf");
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-ExtraLightItalic.ttf");
    font-style: italic;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Light.ttf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-LightItalic.ttf");
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-RegularItalic.ttf");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-MediumItalic.ttf");
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-SemiBoldItalic.ttf");
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-BoldItalic.ttf");
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-ExtraBold.ttf");
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-ExtraBoldItalic.ttf");
    font-style: italic;
    font-weight: 800;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Black.ttf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-BlackItalic.ttf");
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

`;

const theme = {
  colors: {
    primary: '#8A199C',
  },
};

export default theme;
