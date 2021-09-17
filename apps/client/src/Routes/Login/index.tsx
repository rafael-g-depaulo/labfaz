import LoadingFullPage from "Components/LoadingFullPage"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const LoginPage = lazy(() => import("./LoginPage"))

export const Login: Router = ({
  match,
}) => {
  const { path = "/login" } = match ?? {}
  
  return (
    <Switch>

      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <LoginPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Login
