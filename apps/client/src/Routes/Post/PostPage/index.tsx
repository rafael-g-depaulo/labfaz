import React, { FC } from "react";

import Loading from "Components/Loading";
import Display from "./Display"
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

export const PostPage: FC = () => {
  const id_post = useParams<RouteParams>();

  const result = useBlogBannerInfo();

  if (result.isLoading) return <Loading />;
  if (result.error) return <div>error: {result.error.message}</div>;

  return (
    <Display data={result.data!} id={`${id_post}`}/>
  );
};

export default PostPage;
