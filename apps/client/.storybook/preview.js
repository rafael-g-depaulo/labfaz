import React from "react"

// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  DocsContainer,
  Stories,
} from '@storybook/addon-docs/blocks';

import { ThemeProvider } from "../src/Themes"
import GlobalStyles from "../src/GlobalStyles"

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

const injectGlobalStylesAndTheme = Story => (
  <>
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </>
)

export const decorators = [
  injectGlobalStylesAndTheme,
]
