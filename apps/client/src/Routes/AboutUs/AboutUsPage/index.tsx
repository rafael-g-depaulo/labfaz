import React, { FC } from "react"

import { useAboutUsdata, useStaffData } from "Api/AboutUs"
import Loading from "Components/Loading"
import Display from "./Display"

export const AboutUsPage: FC = () => {

  const result = useAboutUsdata()
  const staff = useStaffData()

  if (result.isLoading || staff.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>
  if (staff.error) return <div>error: {staff.error.message}</div>

  return (
    <Display about_data={result.data} staff={staff.data}/>
  )
}

export default AboutUsPage
