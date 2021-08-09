import React, { FC } from "react";

import useMobile from "Hooks/useMobile";
import { useSocialNetworksLabfaz } from "Api/SocialNetworksLabfaz";
import Loading from "Components/Loading";
import Mobile from "./Mobile";
import Web from "./Web";

export const Error: FC = () => {
  const result = useSocialNetworksLabfaz();
  const width = useMobile();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  if (width) return <Mobile data={result.data} />;
  else return <Web />;
};

export default Error;
