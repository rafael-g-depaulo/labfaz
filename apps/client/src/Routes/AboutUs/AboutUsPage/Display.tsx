import { AboutUsData, StaffData } from "Api/AboutUs"
import React, { FC } from "react"

import Wireframe from "Components/Wireframe"
import Banner from "Components/Banner"

import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"
import Staff from "./StaffComponent"

import { Spacer } from "./styles"

export interface DisplayProps {
  about_data: AboutUsData
  staff: StaffData,
}

export const Display: FC<DisplayProps> = ({
  about_data,
  staff,
}) => {
  const {banner_data, welcome_data, about_us_data} = about_data

  return (
    <Wireframe>
      <Banner title="Quem somos" subtitle={banner_data} align="left"/>
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
      <Staff data={staff} />
      <Spacer />
    </Wireframe>
  )
}

export default Display
