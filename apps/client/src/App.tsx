import React from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { showRoutes } from 'FeatureFlags'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      { showRoutes ? <Routes /> : <div>em construção...</div> }
    </>
  )
}

export default App
