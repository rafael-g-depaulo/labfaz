import React, { FC } from "react"

import Error from "Pages/Error"

import LoadingFullPage from "Components/LoadingFullPage"

import { useHomepage, useHomepagePresentationInfo } from "Api/Homepage"
// import { useCoursePresentations } from "Api/CoursePresentation"
import { useHomepageBannerInfo } from "Api/HomepageBannerInfo"
import { useHomePartners } from "Api/HomePartners"

import Display from "./Display"

export const HomePage: FC = () => {
  const result = useHomepageBannerInfo()
  const partners = useHomePartners()
  const coursesText = useHomepage()
  // const coursesData = useCoursePresentations()
  const homepagePresentation = useHomepagePresentationInfo()

  // loading
  if (
    result.isLoading ||
    homepagePresentation.isLoading ||
    partners.isLoading ||
    // coursesData.isLoading ||
    coursesText.isLoading
  ) return <LoadingFullPage />

  // errors
  if (result.error)
    return <Error
      errorStatus={result.error.response?.status}
      errorMessage={result.error.response?.statusText}
    />

  if (homepagePresentation.error)
    return <Error
      errorStatus={homepagePresentation.error.response?.status}
      errorMessage={homepagePresentation.error.response?.statusText}
    />

  if (partners.error)
    return <Error
      errorStatus={partners.error.response?.status}
      errorMessage={partners.error.response?.statusText}
    />

  // if (coursesData.error)
  //   return <Error
  //     errorStatus={coursesData.error.response?.status}
  //     errorMessage={coursesData.error.response?.statusText}
  //   />

  if (coursesText.error)
    return <Error
      errorStatus={coursesText.error.response?.status}
      errorMessage={coursesText.error.response?.statusText}
    />

  return (
    <Display
      data={result.data}
      title={homepagePresentation.data.Title}
      subtitle={homepagePresentation.data.SubTitle}
      video={homepagePresentation.data.Video}
      partners={partners.data}
      coursesText={coursesText.data!}
      // coursesData={coursesData.data!}
    />
  )
}

export default HomePage
