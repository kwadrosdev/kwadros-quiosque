import { createGlobalStyle, keyframes } from 'styled-components';

const nprogress_spinner = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }

`;

const fade_in_up = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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

  .rc-dotlist {
    bottom: -30px;
  }

  .rc-slider {
    left: 50%
  }
  
  .rc-slide {
    min-width: 359px;
    padding: 0px 12px;

    @media screen and (max-width: 959px) {
      min-width: 306px;
      padding: 0px 8px;
    }
  }

  .thin-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: transparent #ddd; 
  }

  .thin-scrollbar:hover::-webkit-scrollbar-thumb {
    background: #ccc; 
  }

  .thin-scrollbar::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  .thin-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .thin-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .thin-scrollbar::-webkit-scrollbar-corner {
    background: transparent;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .ymp-buy-button-holder {
    display: none !important;
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

  #nprogress {
  pointer-events: none;
  z-index: 4000;
}

#nprogress .bar {
  background: #8A199C;

  position: fixed;
  z-index: 4000;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #8A199C, 0 0 5px #8A199C;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: none;
  position: fixed;
  z-index: 4000;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #8A199C;
  border-left-color: #8A199C;
  border-radius: 50%;

  -webkit-animation: ${nprogress_spinner} 400ms linear infinite;
  animation: ${nprogress_spinner} 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

.appear-container {
  animation: ${fade_in_up} 0.6s;
}

.pdf-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 64px 16px;

  & h1 {
    font-size: 32px;
    color: #1c0220;
  }
  
  & h3 {
    font-size: 20px;
    color: #1c0220;
  }
  
  & h4 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  & h5 {
    font-size: 16px;
    font-weight: bold;
  }

  & p {
    font-size: 16px;
  }
}

`;

const theme = {
  colors: {
    primary: '#8A199C',
    black: '#333',
  },
};

export default theme;
