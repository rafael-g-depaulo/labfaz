import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, RouteComponentProps, Switch } from "react-router-dom"

import { Router } from "Routes"

const RegisterPage = lazy(() => import("Pages/EmailConfirmation"))

export const Login: Router = ({
  match,
}) => {
  const { path = "/confirmar-email" } = match ?? {}
  
  return (
    <Switch>
      <Route path={`${path}/:user_id`}>
        {({ match }: RouteComponentProps<{ user_id: string }>) => (
          <Suspense fallback={<Loading />}>
            <RegisterPage userId={match.params.user_id}/>
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Login
