import React, { FC } from "react";

import useMobile from "Hooks/useMobile";
import { useSocialNetworksLabfaz } from "Api/SocialNetworksLabfaz";
import Loading from "Components/Loading";
import Mobile from "./Mobile";
import Web from "./Web";

export interface Props {
  errorStatus: number | undefined;
  errorMessage: string | undefined;
}

export const Error: FC<Props> = ({ errorStatus, errorMessage }) => {
  const result = useSocialNetworksLabfaz();
  const width = useMobile();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  if (width)
    return (
      <Mobile data={result.data} status={errorStatus} message={errorMessage} />
    );
  else return <Web status={errorStatus} message={errorMessage} />;
};

export default Error;
