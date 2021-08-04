import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

import usePageview from "Hooks/usePageView"

const ProfilePage = lazy(() => import("./ProfilePage"))

export const Profile: Router = ({
  match,
}) => {
  const { path = "/profile" } = match ?? {}

  usePageview({ name: 'profile', path: path });

  return (
    <Switch>
      <Route path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ProfilePage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Profile
