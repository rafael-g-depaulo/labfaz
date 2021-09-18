import LoadingFullPage from "Components/LoadingFullPage"
import usePageview from "Hooks/usePageView"
import React, { Suspense } from "react"
import { Route, Switch } from "react-router"
import { Router } from "Routes"
import { lazy } from "yup"

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
