import React, { FC } from "react";

import LoadingFullPage from "Components/LoadingFullPage";
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

import Display from "./Display";

export const BlogPage: FC = () => {
  const result = useBlogBannerInfo();

  if (result.isLoading) return <LoadingFullPage />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return <Display data={result.data} />;
};

export default BlogPage;
