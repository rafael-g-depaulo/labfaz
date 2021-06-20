import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const AboutUsPage = lazy(() => import("./AboutUsPage"))

export const AboutUs: Router = ({
  match,
}) => {
  const { path = "/about-us" } = match ?? {}
  
  return (
    <Switch>
      <Route path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <AboutUsPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default AboutUs
