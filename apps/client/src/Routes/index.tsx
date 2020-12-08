import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'

const Home = lazy(() => import('./Home'))
const PeopleExample = lazy(() => import('./PeopleExample'))
const SingletonExample = lazy(() => import('./SingletonExample'))

export type RouterProps<MatchParams = {}> = {
  history?: History,
  location?: Location,
  match: match<MatchParams> | null,
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {
  return (
    <BaseRouter>

      <Switch>
        
        {/* default route */}
        <Route exact path="/">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Home match={match}/>
              </Suspense> 
            )}
        </Route>
        
        {/* home router */}
        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>

        {/* strapi collection example router */}
        <Route path="/people-example">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <PeopleExample match={match} />
              </Suspense>
            )}
        </Route>

        {/* strapi collection example router */}
        <Route path="/singleton-example">
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <SingletonExample match={match} />
              </Suspense>
            )}
        </Route>
      </Switch>

    </BaseRouter>
  )
}

export default Routes
