import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { showRoutes } from 'FeatureFlags'
import GlobalContext from 'Context'
import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'

import useGoogleAnalytics from 'Hooks/useInitializeGA'
import Contruction from 'Pages/Construction'


export const App = () => {

  useGoogleAnalytics()

  return (
    <>
      <GlobalStyles />
      <GlobalContext>
        { showRoutes
          ? <Routes />
          : <BrowserRouter><Contruction /></BrowserRouter>
        }
      </GlobalContext>
    </>
  )
}

export default App
