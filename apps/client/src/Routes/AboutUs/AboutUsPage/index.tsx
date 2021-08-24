import React, { FC } from "react"

import { useAboutUsdata, useTeamData } from "Api/AboutUs"
import LoadingFullPage from "Components/LoadingFullPage"
import Display from "./Display"

export const AboutUsPage: FC = () => {

  const result = useAboutUsdata()
  const team = useTeamData()

  if (result.isLoading || team.isLoading) return <LoadingFullPage />
  if (result.error) return <div>error: {result.error.message}</div>
  if (team.error) return <div>error: {team.error.message}</div>

  return (
    <Display about_data={result.data} team={team.data}/>
  )
}

export default AboutUsPage
