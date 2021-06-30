import React, { FC } from "react";

import { useBlogPosts } from "Api/BlogPost";
import Loading from "Components/Loading";

import Display from "./Display";

export const PostCard: FC = () => {
  const { data, error, isLoading } = useBlogPosts();

  if (isLoading) return <Loading />;
  if (error) return <div>error: {error?.message ?? ""}</div>;

  return <Display posts={data!} />;
};

export default PostCard;
