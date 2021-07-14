import Loading from "Components/Loading"
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
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Login
