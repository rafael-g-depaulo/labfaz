import React, { FC } from "react"

import { useAboutUsdata, useTeamData } from "Api/AboutUs"
import LoadingFullPage from "Components/LoadingFullPage"
import Display from "./Display"
import { useAboutUsBannerInfo } from "Api/AboutUsBannerInfo"

export const AboutUsPage: FC = () => {

  const aboutUs = useAboutUsdata()
  const banner = useAboutUsBannerInfo()
  const team = useTeamData()

  if (aboutUs.isLoading || team.isLoading || banner.isLoading) return <LoadingFullPage />
  if (aboutUs.error) return <div>error: {aboutUs.error.message}</div>
  if (team.error) return <div>error: {team.error.message}</div>
  if (banner.error) return <div>error: {banner.error.message}</div>

  return (
    <Display about_data={aboutUs.data} team={team.data} banner_data={banner.data}/>
  )
}

export default AboutUsPage
