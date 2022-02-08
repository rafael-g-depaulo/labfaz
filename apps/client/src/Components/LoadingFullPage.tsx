import { FC } from "react";

import Loading from "./Loading";
import Wireframe from "./Wireframe";

export const LoadingFullPage: FC = () => {
  return (
    <Wireframe>
      <Loading />
    </Wireframe>
  );
};

export default LoadingFullPage;
