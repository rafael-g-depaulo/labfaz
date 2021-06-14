import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  /* variables */
  html {
    --color-text: black;
    --font-size: 18px;
  }

  * {
    box-sizing: border-box;
    font-family: "Town Text";
    font-size: var(--font-size);
    color: var(--colot-text);
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

`

export default GlobalStyles
