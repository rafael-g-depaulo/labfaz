import React, { FC } from "react"

import LoadingFullPage from "Components/LoadingFullPage"
import { useBlogBannerInfo } from "Api/BlogBannerInfo"

import Display from "./Display"
import { useBlogPosts } from "Api/BlogPost"

export const BlogPage: FC = () => {
  const bannerInfo = useBlogBannerInfo()
  const posts = useBlogPosts()

  if (bannerInfo.isLoading || posts.isLoading) return <LoadingFullPage />
  if (bannerInfo.error) return <div>error: {bannerInfo.error.message}</div>
  if (posts.error) return <div>error: {posts.error.message}</div>

  return <Display data={bannerInfo.data} posts={posts.data} />
}

export default BlogPage
