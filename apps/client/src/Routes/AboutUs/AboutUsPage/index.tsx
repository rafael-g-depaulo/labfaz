import React, { FC } from "react"

import { useAboutUsBannerInfo} from "Api/AboutUsBannerInfo"
import Loading from "Components/Loading"
import Display from "./Display"

export const AboutUsPage: FC = () => {

  const { data, error, isLoading } = useAboutUsBannerInfo()

  if (error) return <div>error: { error?.message ?? "" }</div>
  if (isLoading) return <Loading />

  return (
    <Display data={data!}/>
  )
}

export default AboutUsPage
