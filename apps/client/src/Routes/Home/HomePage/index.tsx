import React, { FC } from "react";

import { useHomepageBannerInfo } from "Api/HomepageBannerInfo";
import { useHomepage } from "Api/Homepage";
import { useCoursePresentations } from "Api/CoursePresentation";
import { useHomePartners } from "Api/HomePartners";

import LoadingFullPage from "Components/LoadingFullPage";
import Error from "Pages/Error";
import Display from "./Display";

export const HomePage: FC = () => {
  const banner = useHomepageBannerInfo();
  const presentationTexts = useHomepage();
  const presentationCourses = useCoursePresentations();
  const partners = useHomePartners();

  if (
    banner.isLoading ||
    presentationTexts.isLoading ||
    presentationCourses.isLoading ||
    partners.isLoading
  )
    return <LoadingFullPage />;

  if (banner.error)
    return (
      <Error
        errorStatus={banner.error.response?.status}
        errorMessage={banner.error.response?.statusText}
      />
    );

  if (presentationTexts.error)
    return (
      <Error
        errorStatus={presentationTexts.error.response?.status}
        errorMessage={presentationTexts.error.response?.statusText}
      />
    );

  if (presentationCourses.error)
    return (
      <Error
        errorStatus={presentationCourses.error.response?.status}
        errorMessage={presentationCourses.error.response?.statusText}
      />
    );

  if (partners.error)
    return (
      <Error
        errorStatus={partners.error.response?.status}
        errorMessage={partners.error.response?.statusText}
      />
    );

  return (
    <Display
      data={banner.data}
      texts={presentationTexts.data!}
      courses={presentationCourses.data!}
      partners={partners.data}
    />
  );
};

export default HomePage;
