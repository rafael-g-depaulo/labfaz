import { AboutUsData, StaffData } from "Api/AboutUs"
import React, { FC } from "react"

import Header from "Components/Header"
import Banner from "Components/Banner"
import Footer from "Components/Footer"

import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"
import Staff from "./StaffComponent"

import { MainContainer, Spacer } from "./styles"

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
    <MainContainer>
      <Header />
      <Banner title="Quem somos" subtitle={banner_data} align="left"/>
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
      <Staff data={staff} />
      <Spacer />
      <Footer />
    </MainContainer>
  )
}

export default Display
