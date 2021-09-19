import React, { Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"
import usePageview from "Hooks/usePageView"
import LoadingFullPage from "Components/LoadingFullPage"

// import UserSearchPage from "./UserSearchPage"

const UserSearchPage = lazy(() => import("./UserSearchPage"))

export const UserSearch: Router = ({
  match
}) => {
  const { path = "/banco-profissionais" } = match ?? {}
  usePageview({ name: 'banco-profissionais', path: path })

  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <UserSearchPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default UserSearch
