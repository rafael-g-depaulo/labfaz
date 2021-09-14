import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { Router } from "Routes"

import usePageview from "Hooks/usePageView"

const PersonalProfilePage = lazy(() => import("./PersonalProfilePage"))
const UsersProfilePage = lazy(() => import("./UsersProfilePage"))

export const Profile: Router = ({
  match,
}) => {
  const { path = "/profile" } = match ?? {}

  usePageview({ name: 'profile', path: path });

  return (
    <Switch>
      <Route path={[`${path}/eu`, `${path}/me`]}>
        {() => (
          <Suspense fallback={<Loading />}>
            <PersonalProfilePage />
          </Suspense>
        )}
      </Route>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <PersonalProfilePage />
          </Suspense>
        )}
      </Route>

      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <UsersProfilePage id={String(match?.params.id)} />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Profile
