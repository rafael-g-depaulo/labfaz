import React, { lazy, Suspense } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { Router } from "Routes";

import usePageview from "Hooks/usePageView";

import LoadingFullPage from "Components/LoadingFullPage";

const BlogPage = lazy(() => import("./BlogPage"));
const PostPage = lazy(() => import("./PostPage"));

export const Blog: Router = ({ match }) => {
  const { path = "/blog" } = match ?? {};

  usePageview({ name: "blog", path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <BlogPage />
          </Suspense>
        )}
      </Route>

      {/* show de um post */}
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<LoadingFullPage />}>
            <PostPage id={Number(match?.params.id)} />
          </Suspense>
        )}
      </Route>
    </Switch>
  );
};

export default Blog;
