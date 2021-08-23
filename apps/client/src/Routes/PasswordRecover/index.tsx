import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

import usePageView from "Hooks/usePageView"

const AskResetPage = lazy(() => import("./AskReset"))
const ResetEmail =  lazy(() => import("./ResetEmail"))


export const PasswordRecover: Router = ({
  match,
}) => {
  const { path = "recover" } = match ?? {}

  usePageView({ name: "recuperacao", path });

  return (
    <Switch>
      <Route path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <AskResetPage />
          </Suspense>
        )}
      </Route>
      <Route path={`${path}/:token`}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ResetEmail />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}


export default PasswordRecover;
