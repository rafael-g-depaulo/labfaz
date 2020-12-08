import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Town Text";
    font-size: ${({ theme }) => theme.fontSize};
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

`

export default GlobalStyles