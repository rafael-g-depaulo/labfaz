import { showRoutes } from "FeatureFlags"
import GlobalStyles from "GlobalStyles"
import GlobalContext from 'Context'
import Routes from "Routes"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalContext>
        { showRoutes && <Routes /> }
      </GlobalContext>
    </>
  )
}

export default App
