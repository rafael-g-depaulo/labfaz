import { AboutUsBannerInfo } from "Api/AboutUsBannerInfo"
import React, { FC } from "react"

import Header from "Components/Header"
import Banner from "Components/Banner"


import About from "./AboutUsComponent"

export interface DisplayProps {
  data: AboutUsBannerInfo
}

export const Display: FC<DisplayProps> = ({
  data,
}) => {
  const {title, subtitle} = data!
  return (
    <>
     <Header />
     <Banner title={title} subtitle={subtitle} align="left" />
    </>
  )
}

export default Display
