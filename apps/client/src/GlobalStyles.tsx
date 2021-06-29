import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  /* variables */
  html {
    --color-text: black;
    --background-dark-gray: #C4C4C4;
    --background-gray: #E7E7E7;
    --background-light-gray: #C4C4C425;
    --background-white: #FFFFFF;

    --font-size-title: 35px;
    --font-size-title-medium: 30px;
    --font-size-default: 18px;
    --font-size-large: 16px;
    --font-size-medium: 14px;
    --font-size-short: 12px;
    --line-height-default: 48.72px; 
    --line-height-small: 20px; 
    --line-height-medium: 30px; 
  }

  * {
    box-sizing: border-box;
    font-family: "Town Text";
    font-size: var(--font-size-default);
    color: var(--colot-text);
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

`

export default GlobalStyles
