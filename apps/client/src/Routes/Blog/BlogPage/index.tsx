import React, { FC } from "react"

import Loading from "Components/Loading"
import Display from "./Display"
import { useBlogBannerInfo } from "Api/BlogBannerInfo"

export const BlogPage: FC = () => {

  const { data, error, isLoading } = useBlogBannerInfo()

  if (isLoading) return <Loading />
  if (error) return <div>error: { error?.message ?? "" }</div>

  return (
    <Display data={data!}/>
  )
}

export default BlogPage
