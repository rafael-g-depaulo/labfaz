import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Router } from "Routes";

import usePageview from "Hooks/usePageView";

import LoadingFullPage from "Components/LoadingFullPage";

const AboutUsPage = lazy(() => import("./AboutUsPage"));

export const AboutUs: Router = ({ match }) => {
  const { path = "/about-us" } = match ?? {};

  usePageview({ name: "sobre", path: path });

  return (
    <Switch>
      <Route path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <AboutUsPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  );
};

export default AboutUs;
