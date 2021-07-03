import React, { FC } from "react"

import { useAboutUsdata } from "Api/AboutUs"
import Loading from "Components/Loading"
import Display from "./Display"

export const AboutUsPage: FC = () => {

  const { data, error, isLoading } = useAboutUsdata()
  

  if (isLoading) return <Loading />
  if (error) return <div>error: {error.message}</div>

  return (
    <Display about_data={data!}/>
  )
}

export default AboutUsPage
