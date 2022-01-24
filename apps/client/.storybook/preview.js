// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  DocsContainer,
  Stories,
} from '@storybook/addon-docs/blocks'

import { createGlobalStyle } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import Helmet from "react-helmet"

import GlobalStyles from "../src/GlobalStyles"
import GlobalContext from "../src/Context"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  
  // for stories documentation
  docs: {
    container: DocsContainer,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
      </>
    ),
  },
}

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 !important;
    min-height: 100vh;
  }
`

const injectGlobalStyles = Story => (
  <>
      <GlobalStyles />
      <BodyStyle />
      <Story />
  </>
)

const injectGoogleFonts = Story => (
  <>
    <Helmet>
      {/* <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&amp;display=swap" rel="stylesheet" /> */}
    </Helmet>
    <Story />
  </>
)

const injectReactRouter = Story => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

const injectGlobalContext = Story => (
  <GlobalContext>
    <Story />
  </GlobalContext>
)

export const decorators = [
  injectGlobalStyles,
  injectGoogleFonts,
  injectReactRouter,
  injectGlobalContext,
]
