import React, { FC } from "react";

import Loading from "Components/Loading";
import Display from "./Display"
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

interface RouteParams {
  id: number;
}

export const PostPage: FC<RouteParams> = ({id}) => {  
  const result = useBlogBannerInfo();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return (
    <Display data={result.data!} id={id}/>
  );
};

export default PostPage;
