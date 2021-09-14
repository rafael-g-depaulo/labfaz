import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

import usePageview from "Hooks/usePageView"

const ClassesPage = lazy(() => import("./ClassesPage"))
// const PostPage = lazy(() => import("./PostPage"))

export const Classes: Router = ({
  match,
}) => {
  const { path = "/classes" } = match ?? {}

  usePageview({ name: 'classes', path })
  
  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ClassesPage />
          </Suspense>
        )}
      </Route>

      {/* show de um curso
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <PostPage id={Number(match?.params.id)} />
          </Suspense>
        )}
      </Route> */}
    </Switch>
  )
}

export default Classes;
