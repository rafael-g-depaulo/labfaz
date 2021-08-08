import React, { FC } from "react";

import Loading from "Components/Loading";

import Display from "./Display";

export const ClassesPage: FC = () => {
  // const result = useBlogBannerInfo();

  // if (result.isLoading) return <Loading />;
  // if (result.error) return <div>error: {result.error.message}</div>;

  return <Display />;
};

export default ClassesPage;
