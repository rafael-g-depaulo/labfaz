import { AboutUsData, StaffData } from "Api/AboutUs"
import React, { FC } from "react"

import Fullpage from "Components/FullPage"
import Header from "Components/Header"
import Banner from "Components/Banner"
import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"
import Staff from "./StaffComponent"

export interface DisplayProps {
  data: AboutUsData
  staff: StaffData
}

export const Display: FC<DisplayProps> = ({
  data,
  staff
}) => {
  const {banner_data, welcome_data, about_us_data} = data!
  const staff_data = staff.staffs

  return (
    <Fullpage>
      <Header />
      <Banner title="Quem somos" subtitle={banner_data} align="left"/>
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
      <Staff  data={staff_data}/>
    </Fullpage>
  )
}

export default Display
