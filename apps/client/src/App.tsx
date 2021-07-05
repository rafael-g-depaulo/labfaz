import React from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { showRoutes } from 'FeatureFlags'
import Contruction from 'Pages/Contruction'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      { showRoutes ? <Routes /> : <Contruction /> }
    </>
  )
}

export default App
