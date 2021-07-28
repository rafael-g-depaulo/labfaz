import React, { FC } from "react";

import { useBlogPost } from "Api/BlogPost";
import Loading from "Components/Loading";

import Display from "./Display";

interface Props {
  id: number;
}

export const PostDetails: FC<Props> = ({ id }) => {
  const response = useBlogPost(id);

  if (response.isLoading) return <Loading />;
  if (response.error) return <div>error: {response.error.message}</div>;

  return <Display post={response.data!} />;
};

export default PostDetails;
