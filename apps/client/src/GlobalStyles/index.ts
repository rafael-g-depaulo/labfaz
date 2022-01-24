import { createGlobalStyle } from "styled-components"
import { setupColorVars } from "./colors"

const GlobalStyles = createGlobalStyle`

  html {
    ${setupColorVars()}
  }

 * {
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    margin: 0;
    text-decoration: none;
  }
`

export default GlobalStyles
