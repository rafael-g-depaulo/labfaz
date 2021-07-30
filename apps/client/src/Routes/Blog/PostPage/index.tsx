import React, { FC } from "react";

import Loading from "Components/Loading";
import Display from "./Display"
import { useBlogBannerInfo } from "Api/BlogBannerInfo";
import { useBlogPost } from "Api/BlogPost";

interface RouteParams {
  id: number;
}

export const PostPage: FC<RouteParams> = ({ id }) => {  
  const result = useBlogBannerInfo()
  const post = useBlogPost(id)

  if (result.isLoading || post.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>
  if (post.error) return <div>error: {post.error.message}</div>

  return (
    <Display data={result.data} post={post.data} />
  );
};

export default PostPage;
