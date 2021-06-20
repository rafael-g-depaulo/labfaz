import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* import Cairo Font */
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
  /* @import Inter Font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  /* variables */
  html {
    --color-text: black;
    --font-size: 18px;
    --font-family: 'Inter', 'Cairo', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--colot-text);
  }

  body {
    margin: 0;
    min-height: 100vh;
  }
`

export default GlobalStyles
