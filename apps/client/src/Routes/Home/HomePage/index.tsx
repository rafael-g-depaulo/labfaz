import React, { FC } from "react";

import LoadingFullPage from "Components/LoadingFullPage";
import { useHomepageBannerInfo } from "Api/HomepageBannerInfo";
import Display from "./Display";

export const HomePage: FC = () => {
  const result = useHomepageBannerInfo();

  if (result.isLoading) return <LoadingFullPage />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return <Display data={result.data} />;
};

export default HomePage;
