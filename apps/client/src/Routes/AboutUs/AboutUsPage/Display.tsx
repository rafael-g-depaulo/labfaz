import React, { FC } from "react"

import { AboutUsData, TeamsData } from "Api/AboutUs"
import { AboutUsBannerInfo } from "Api/AboutUsBannerInfo"

import Wireframe from "Components/Wireframe"
import Banner from "Components/Banner"

import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"
import Staff from "./StaffComponent"

import { Spacer } from "./styles"

export interface DisplayProps {
  about_data: AboutUsData,
  banner_data: AboutUsBannerInfo
  team: TeamsData,
}

export const Display: FC<DisplayProps> = ({
  banner_data,
  about_data,
  team,
}) => {
  const { welcome_data, about_us_data} = about_data

  return (
    <Wireframe>
      <Banner align="left" {...banner_data} image={banner_data.image} />
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
      <Staff data={team} />
      <Spacer />
    </Wireframe>
  )
}

export default Display
