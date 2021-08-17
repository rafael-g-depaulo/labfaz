import React, { FC } from "react";

import useMobile from "Hooks/useMobile";
import Mobile from "./Mobile";
import Web from "./Web";

import Wireframe from "Components/Wireframe";

export interface Props {
  errorStatus: number | undefined;
  errorMessage: string | undefined;
}

export const Error: FC<Props> = ({ errorStatus, errorMessage }) => {
  const width = useMobile();

  if (width)
    return (
      <Wireframe>
        <Mobile status={errorStatus} message={errorMessage} />
      </Wireframe>
    );
  else
    return (
      <Wireframe>
        <Web status={errorStatus} message={errorMessage} />
      </Wireframe>
    );
};

export default Error;
