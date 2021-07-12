import React, { FC } from "react";

import Loading from "Components/Loading";
import Display from "./Display"
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

export const PostPage: FC = () => {
  const result = useBlogBannerInfo();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return (
    <Display data={result.data!}/>
  );
};

export default PostPage;
