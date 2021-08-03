import React, { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom";

import Loading from "Components/Loading"
import { showAboutUs, showBlog } from "FeatureFlags"

// const Home = lazy(() => import("./Home"))
// const PeopleExample = lazy(() => import("./PeopleExample"))
// const SingletonExample = lazy(() => import("./SingletonExample"))
const Blog = lazy(() => import("./Blog"))
const AboutUs = lazy(() => import("./AboutUs"))
const NotFound = lazy(() => import("../Pages/NotFound"))

export type RouterProps<MatchParams = {}> = {
  history?: History;
  location?: Location;
  match: match<MatchParams> | null;
};
export type Router<T = {}> = FC<RouterProps<T>>;

const Routes: FC = () => {
  return (
    <BaseRouter>
      <Switch>
        {/* default route */}
        <Route exact path="/">
          {() => (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          )}
        </Route>
        
        {/* home router */}
        <Route path={["/home"]}>
          {() => (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          )}
        </Route>

        {/* blog router */}
        { showBlog &&
        <Route path={["/blog"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Blog match={match} />
            </Suspense>
          )}
        </Route>
        }

        {/* strapi collection example router */}
        {/* <Route path="/people-example">
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <PeopleExample match={match} />
            </Suspense>
          )}
        </Route> */}

        {/* strapi collection example router */}
        {/* <Route path="/singleton-example">
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <SingletonExample match={match} />
            </Suspense>
          )}
        </Route> */}

        { showAboutUs &&
        <Route
          path={["/aboutus", "/about-us", "/sobre-nos", "/sobre", "/about"]}
        >
        {({ match }) => (
          <Suspense fallback={<Loading />}>
            <AboutUs match={match} />
          </Suspense>
        )}
        </Route>
        }
      </Switch>
    </BaseRouter>
  );
};

export default Routes;
