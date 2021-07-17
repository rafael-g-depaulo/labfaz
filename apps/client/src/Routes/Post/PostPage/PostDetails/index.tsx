import React, { FC } from "react";

import { useBlogPost } from "Api/BlogPost";
import Loading from "Components/Loading";

import Display from "./Display";

interface Props {
  id: string;
}

export const PostDetails: FC<Props> = ({ id }) => {
  const { data, error, isLoading } = useBlogPost(Number(id));

  if (isLoading) return <Loading />;
  if (error) return <div>error: {error?.message ?? ""}</div>;

  return <Display post={data!} />;
};

export default PostDetails;
