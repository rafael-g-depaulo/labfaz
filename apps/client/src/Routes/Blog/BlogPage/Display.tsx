import React, { FC } from "react"

import Banner from "Components/Banner"
import { BlogBannerInfo } from "Api/BlogBannerInfo"

import PostCard from "./PostCard/Display"
import Wireframe from "Components/Wireframe"
import { BlogPost } from "Api/BlogPost"

export interface DisplayProps {
  data: BlogBannerInfo
  posts: BlogPost[]
}

export const Display: FC<DisplayProps> = ({ data, posts }) => {
  const { title, subtitle, image } = data;

  return (
    <Wireframe>
      <Banner title={title} subtitle={subtitle} image={image} align="left" />
      <PostCard posts={posts}/>
    </Wireframe>
  )
}

export default Display;
