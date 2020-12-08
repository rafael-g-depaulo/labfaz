import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { Router } from "Routes"

const ShowSingleton = lazy(() => import('./ShowSingleton'))

export const PeopleExample: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}

  return (
    <Switch>

      {/* página a ser renderizada */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ShowSingleton />
          </Suspense>
        )}
      </Route>

    </Switch>
  )
}

export default PeopleExample
