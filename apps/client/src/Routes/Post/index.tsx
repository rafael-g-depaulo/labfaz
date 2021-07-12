import Loading from "Components/Loading";
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Router } from "Routes";

const PostPage = lazy(() => import("./PostPage"));

export const Post: Router = ({ match }) => {
  const { path = "/post" } = match ?? {};

  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <PostPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  );
};

export default Post;
