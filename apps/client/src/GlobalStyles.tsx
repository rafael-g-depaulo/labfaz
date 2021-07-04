import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400&display=swap');

  /* variables */
  html {
    --color-text-black: #000000;
    --color-text-white: #FFFFFF;
    --color-text-beige: #FFEC99;
    --color-text-yellow: #FFEC99;
    --color-text-pink: #FC0061;
    --color-text: var(---color-text-black);

    
    --background-dark-gray: #C4C4C4;
    --background-gray: #E7E7E7;
    --background-light-gray: #C4C4C425;
    --background-white: #FFFFFF;
    --background-black: #000000;
    --background-pink: #FC0061;
    --background-blue: #0C74FF;
    --background-light-pink: #FFEC99;
    --button-color-yellow: #FFEC99;
    --button-color-pink: #FC0061;

    --font-size-title-xxxlarge: 64px;
    --font-size-title-xxlarge: 56px;
    --font-size-title-xlarge: 48px;
    --font-size-title: 35px;
    --font-size-title-medium: 30px;
    --font-size-title-small: 28px;
    --font-size-subtitle: 24px;
    --font-size-title-smaller: 22px;
    --font-size-default: 18px;
    --font-size-large: 16px;
    --font-size-medium: 14px;
    --font-size-short: 11px;

    --line-height-default: 48.72px; 
    --line-height-small: 25px; 
    --line-height-medium: 30px; 

    --card-font-family: 'Cairo', 'Town text'
  }

  * {
    box-sizing: border-box;
    font-family: "Cairo", sans-serif;
    font-size: var(--font-size-default);
    color: var(--colot-text-white);
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
