import React, { FC } from "react";

import useMobile from "Hooks/useMobile";
import Mobile from "./Mobile";
import Web from "./Web";

export interface Props {
  errorStatus: number | undefined;
  errorMessage: string | undefined;
}

export const Error: FC<Props> = ({ errorStatus, errorMessage }) => {
  const width = useMobile();

  if (width) return <Mobile status={errorStatus} message={errorMessage} />;
  else return <Web status={errorStatus} message={errorMessage} />;
};

export default Error;
