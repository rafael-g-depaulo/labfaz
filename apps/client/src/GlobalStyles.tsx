import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* import Cairo Font */
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

  /* variables */
  html {
    --color-text: black;
    --background-dark-gray: #C4C4C4;
    --background-gray: #E7E7E7;
    --background-light-gray: #C4C4C425;
    --background-white: #FFFFFF;

    --font-size-title: 35px;
    --font-size-default: 18px;
    --font-size-large: 16px;
    --font-size-medium: 14px;
    --font-size-short: 12px;
    --font-family: 'Cairo', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-size: var(--font-size-default);
    font-family: var(--font-family);
    color: var(----color-text);

  }

  body {
    margin: 0;
    min-height: 100vh;
  }
`

export default GlobalStyles
