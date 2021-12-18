import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Router } from "Routes";

import usePageview from "Hooks/usePageView";

import LoadingFullPage from "Components/LoadingFullPage";

const ObservatorioPage = lazy(() => import("./ObservatorioPage"));
// const PostPage = lazy(() => import("./PostPage"));

export const Observatorio: Router = ({ match }) => {
  const { path = "/observatorio" } = match ?? {};

  usePageview({ name: "observatorio", path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <ObservatorioPage />
          </Suspense>
        )}
      </Route>

      {/* show de um post */}
      {/* <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<LoadingFullPage />}>
            <PostPage id={Number(match?.params.id)} />
          </Suspense>
        )}
      </Route> */}
    </Switch>
  );
};

export default Observatorio;
