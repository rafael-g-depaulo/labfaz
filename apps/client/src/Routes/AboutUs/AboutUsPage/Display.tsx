import { AboutUsData } from "Api/AboutUs"
import React, { FC } from "react"

import Fullpage from "Components/CoursesPresentation"
import Header from "Components/Header"
import Banner from "./BannerComponent"
import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"

export interface DisplayProps {
  data: AboutUsData
}

export const Display: FC<DisplayProps> = ({
  data,
}) => {
  const {banner_data, welcome_data, about_us_data} = data!
  return (
    <Fullpage>
      <Banner subtitle={banner_data}/>
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
    </Fullpage>
  )
}

export default Display
