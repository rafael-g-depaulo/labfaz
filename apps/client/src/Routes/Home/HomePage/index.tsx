import React, { FC } from "react"

import Loading from "Components/Loading"
import {useHomepageBannerInfo } from "Api/HomepageBannerInfo";
import Display from "./Display"

export const HomePage: FC = () => {

  const result = useHomepageBannerInfo()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  return (
    <Display data={result.data}/>
  )
}

export default HomePage
