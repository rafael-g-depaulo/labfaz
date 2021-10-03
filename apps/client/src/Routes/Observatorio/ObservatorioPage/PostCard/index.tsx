import React, { FC } from "react";

import { useObservatorioPosts } from "Api/ObservatorioPost";
import Loading from "Components/Loading";

import Display from "./Display";

export const PostCard: FC = () => {
  const result = useObservatorioPosts();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return <Display posts={result.data!} />;
};

export default PostCard;
