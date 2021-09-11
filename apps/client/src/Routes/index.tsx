import React, { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom";

import LoadingFullPage from "Components/LoadingFullPage";
import { showAboutUs, showBlog } from "FeatureFlags";

const Home = lazy(() => import("./Home"));
// const PeopleExample = lazy(() => import("./PeopleExample"))
// const SingletonExample = lazy(() => import("./SingletonExample"))
const Blog = lazy(() => import("./Blog"))
const AboutUs = lazy(() => import("./AboutUs"))
const NotFound = lazy(() => import("../Pages/NotFound"))
const Register = lazy(() => import('./SignUp'))
const Login = lazy(() => import('./Login'))

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
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>

        {/* home router */}
        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>

        {/* blog router */}
        {showBlog && (
          <Route path={["/blog"]}>
            {({ match }) => (
              <Suspense fallback={<LoadingFullPage />}>
                <Blog match={match} />
              </Suspense>
            )}
          </Route>
        )}

        {/* strapi collection example router */}
        {/* <Route path="/people-example">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <PeopleExample match={match} />
            </Suspense>
          )}
        </Route> */}

        {/* strapi collection example router */}
        {/* <Route path="/singleton-example">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <SingletonExample match={match} />
            </Suspense>
          )}
        </Route> */}

        {showAboutUs && (
          <Route
            path={["/aboutus", "/about-us", "/sobre-nos", "/sobre", "/about"]}
          >
            {({ match }) => (
              <Suspense fallback={<LoadingFullPage />}>
                <AboutUs match={match} />
              </Suspense>
            )}
          </Route>
        )}

        <Route path={["/sign-up", "/signup", "/SignUp"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Register match={match} />
            </Suspense>
          )          }
        </Route>

        <Route path={["/login", "SignIn"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
                <Login match={match} />
            </Suspense>
          )}
        </Route>

        {/* default route (404) */}
        <Route>
          <Suspense fallback={<LoadingFullPage />}>
            <NotFound />
          </Suspense>
        </Route>

      </Switch>
    </BaseRouter>
  );
};

export default Routes;
