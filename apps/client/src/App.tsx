import React from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { ThemeProvider } from 'Themes'
import { showRoutes } from 'FeatureFlags'

export const App = () => {

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        { showRoutes && <Routes />}
      </ThemeProvider>
    </>
  )
}

export default App
