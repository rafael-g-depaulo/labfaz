import React, { FC } from "react";

import Loading from "Components/Loading";
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

import Display from "./Display";

export const BlogPage: FC = () => {
  const result = useBlogBannerInfo();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return <Display data={result.data} />;
};

export default BlogPage;
