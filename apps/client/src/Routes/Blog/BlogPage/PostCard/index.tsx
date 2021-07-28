import React, { FC } from "react";

import { useBlogPosts } from "Api/BlogPost";
import Loading from "Components/Loading";

import Display from "./Display";

export const PostCard: FC = () => {
  const result = useBlogPosts();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return <Display posts={result.data!} />;
};

export default PostCard;
