import { AboutUsData, useStaffData } from "Api/AboutUs"
import React, { FC } from "react"

import Fullpage from "Components/FullPage"
import Header from "Components/Header"
import Banner from "Components/Banner"
import WelcomeComponent from "./WelcomeComponent"
import About from "./AboutUsComponent"
import Staff from "./StaffComponent"
import Loading from "Components/Loading"

export interface DisplayProps {
  about_data: AboutUsData
}

export const Display: FC<DisplayProps> = ({
  about_data,
}) => {
  const {banner_data, welcome_data, about_us_data} = about_data
  
  const { data } = useStaffData()
  


  return (
    <Fullpage>
      <Header />
      <Banner title="Quem somos" subtitle={banner_data} align="left"/>
      <WelcomeComponent data={welcome_data} />
      <About  data={about_us_data} />
      {data ? <Staff data={data} /> : <Loading /> }
    </Fullpage>
  )
}

export default Display
