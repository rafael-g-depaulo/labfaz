import React, { FC } from "react"

import Banner from "Components/Banner"
import { BlogBannerInfo } from "Api/BlogBannerInfo"

import PostCard from "./PostCard"
import Wireframe from "Components/Wireframe"

export interface DisplayProps {
  data: BlogBannerInfo;
}

export const Display: FC<DisplayProps> = ({ data }) => {
  const { title, subtitle } = data;

  return (
    <Wireframe>
      <Banner title={title} subtitle={subtitle} align="left" />
      <PostCard />
    </Wireframe>
  )
}

export default Display;
