import React, { lazy, Suspense } from "react"
import { Route, RouteComponentProps, Switch } from "react-router-dom"
import { Router } from "Routes"

import LoadingFullPage from "Components/LoadingFullPage"

const ListAllPeopleExample = lazy(() => import('./ListAllPeople'))
const ShowPersonExample = lazy(() => import('./ShowPerson'))

export const PeopleExample: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}

  return (
    <Switch>

      {/* lista de todas as pessoas */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <ListAllPeopleExample />
          </Suspense>
        )}
      </Route>

      {/* show de uma pessoa */}
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<LoadingFullPage />}>
            <ShowPersonExample id={Number(match?.params.id)} />
          </Suspense>
        )}
      </Route>

    </Switch>
  )
}

export default PeopleExample
