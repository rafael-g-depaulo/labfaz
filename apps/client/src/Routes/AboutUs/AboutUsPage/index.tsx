import React, { FC } from "react"

import { useAboutUsdata } from "Api/AboutUs"
import Loading from "Components/Loading"
import Display from "./Display"

export const AboutUsPage: FC = () => {

  const result = useAboutUsdata()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  return (
    <Display data={result.data}/>
  )
}

export default AboutUsPage
