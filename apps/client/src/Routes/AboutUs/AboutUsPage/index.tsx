import React, { FC, useEffect } from "react"

import { useAboutUsdata } from "Api/AboutUs"
import Loading from "Components/Loading"
import Display from "./Display"

import ReactGa from 'react-ga';

export const AboutUsPage: FC = () => {

  useEffect(() => {
    ReactGa.pageview('AboutUs')
  }, [])

  const result = useAboutUsdata()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  return (
    <Display data={result.data}/>
  )
}

export default AboutUsPage
