import React, { FC } from "react"

import Banner from "Components/Banner"
import { ObservatorioBannerInfo } from "Api/ObservatorioBannerInfo"

import PostCard from "./PostCard/Display"
import Wireframe from "Components/Wireframe"
import { ObservatorioPost } from "Api/ObservatorioPost"

export interface DisplayProps {
  data: ObservatorioBannerInfo
  posts: ObservatorioPost[]
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
