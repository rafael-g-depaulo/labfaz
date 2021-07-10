import { BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { showRoutes } from 'FeatureFlags'
import Contruction from 'Pages/Contruction'

import ReactGA from 'react-ga';
import RouteTracker from 'Utils/RouteTracker';


export const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-200607957-1')

    ReactGA.pageview(window.location.pathname)
  })

  return (
    <RouteTracker>
      <GlobalStyles />
      { showRoutes ? <Routes /> : <BrowserRouter><Contruction /></BrowserRouter>}
    </RouteTracker>
  )
}

export default App
