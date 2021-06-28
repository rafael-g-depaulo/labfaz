import React, { FC } from "react";

import Loading from "Components/Loading";
import Display from "./Display";
import { useBlogPosts } from "Api/BlogPost";
import { useBlogBannerInfo } from "Api/BlogBannerInfo";

export const BlogPage: FC = () => {
  const result = useBlogBannerInfo()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  const posts = useBlogPosts();

  if (posts.isLoading) return <Loading />;
  if (posts.error) return <div>error: {posts.error?.message ?? ""}</div>;

  return <Display data={result.data} postData={posts.data} />;
};

export default BlogPage;
