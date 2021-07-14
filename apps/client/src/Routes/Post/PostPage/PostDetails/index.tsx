import React, { FC } from "react";

import { useBlogPost } from "Api/BlogPost";
import Loading from "Components/Loading";

import Display from "./Display";

export const PostDetails: FC = () => {
  const { data, error, isLoading } = useBlogPost(3);

  if (isLoading) return <Loading />;
  if (error) return <div>error: {error?.message ?? ""}</div>;

  return <Display post={data!} />;
};

export default PostDetails;
