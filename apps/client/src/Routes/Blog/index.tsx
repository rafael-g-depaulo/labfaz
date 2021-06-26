import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const BlogPage = lazy(() => import("./BlogPage"))

export const Blog: Router = ({
  match,
}) => {
  const { path = "/blog" } = match ?? {}
  
  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <BlogPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Blog
