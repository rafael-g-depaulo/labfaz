import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

import usePageView from "Hooks/usePageView"

const RecoverPage = lazy(() => import("./RecoverPage"))

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
            <RecoverPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}


export default PasswordRecover;
