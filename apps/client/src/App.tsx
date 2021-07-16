import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { showRoutes } from 'FeatureFlags'
import Contruction from 'Pages/Contruction'

import useGoogleAnalytics from 'Hooks/useInitializeGA'


export const App = () => {

  useGoogleAnalytics()

  return (
    <>
      <GlobalStyles />
      { showRoutes ? <Routes /> : <BrowserRouter><Contruction /></BrowserRouter>}
    </>
  )
}

export default App
