import React, { FC, useState, useEffect } from "react";

import Display from "./Display";

import Error from "Pages/Error";
import LoadingFullPage from "Components/LoadingFullPage";

import { strapi } from "Api";
import { useHomepageBannerInfo } from "Api/HomepageBannerInfo";
import { useHomePartners } from "Api/HomePartners";
import { useHomepage } from "Api/Homepage";
import { useCoursePresentations } from "Api/CoursePresentation";

import { mockImage } from "Utils/Image";

export const HomePage: FC = () => {
  const result = useHomepageBannerInfo();
  const partners = useHomePartners();
  const coursesText = useHomepage();
  const coursesData = useCoursePresentations();

  // mocked homepage banner info
  const mockBannerInfo = {
    title: "LabFaz",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: mockImage({
      url:
        "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
      alternativeText: "Blog Banner Image",
    }),
  };

  // presentation request
  const [presentationLoading, setPresentationLoading] = useState(true);
  const [presentationData, setPresentationData] = useState({
    Title: "",
    SubTitle: "",
    Video: "",
  });
  const [presentationError, setPresentationError] = useState();

  useEffect(() => {
    // re-renders with useFetchApi hooks
    strapi
      .get(`/home-presentation-info`)
      .then(({ data }) => data)
      .then(({ Title, SubTitle, Video }) => {
        setPresentationData({ Title, SubTitle, Video });
        setPresentationLoading(false);
      })
      .catch((error) => setPresentationError(error.message));
  }, [presentationLoading]);

  // loading
  if (
    result.isLoading ||
    presentationLoading ||
    partners.isLoading ||
    coursesData.isLoading ||
    coursesText.isLoading
  )
    return <LoadingFullPage />;

  // errors
  if (
    partners.error &&
    presentationError &&
    coursesText.error &&
    coursesData.error
  ) {
    // console.log(partners.error);
    // console.log(presentationError);
    // console.log(coursesText.error);
    // console.log(coursesData.error);
    return (
      <Error
        errorStatus={partners.error.response?.status}
        errorMessage={partners.error.response?.statusText}
      />
    );
  }

  if (partners.error && presentationError) {
    // console.log(partners.error);
    // console.log(presentationError);
    return (
      <Error
        errorStatus={partners.error.response?.status}
        errorMessage={partners.error.response?.statusText}
      />
    );
  }

  if (partners.error && coursesText.error && coursesData.error) {
    // console.log(partners.error);
    // console.log(coursesText.error);
    // console.log(coursesData.error);
    return (
      <Error
        errorStatus={partners.error.response?.status}
        errorMessage={partners.error.response?.statusText}
      />
    );
  }

  if (presentationError && coursesText.error && coursesData.error) {
    // console.log(presentationError);
    // console.log(coursesText.error);
    // console.log(coursesData.error);
    return (
      <Error
        errorStatus={coursesText.error.response?.status}
        errorMessage={coursesText.error.response?.statusText}
      />
    );
  }

  if (presentationError) {
    // console.log(presentationError);
    return (
      <Display
        data={result.data!}
        title={null}
        subtitle={null}
        video={null}
        partners={partners.data!}
        coursesText={coursesText.data!}
        coursesData={coursesData.data!}
      />
    );
  }

  if (partners.error) {
    // console.log(partners.error);
    return (
      <Display
        data={result.data!}
        title={presentationData.Title}
        subtitle={presentationData.SubTitle}
        video={presentationData.Video}
        partners={null}
        coursesText={coursesText.data!}
        coursesData={coursesData.data!}
      />
    );
  }

  if (coursesText.error || coursesData.error) {
    // console.log(coursesText.error);
    // console.log(coursesData.error);
    return (
      <Display
        data={result.data!}
        title={presentationData.Title}
        subtitle={presentationData.SubTitle}
        video={presentationData.Video}
        partners={partners.data!}
        coursesText={null}
        coursesData={null}
      />
    );
  }

  if (result.error) {
    // console.log(result.error);
    return (
      <Display
        data={mockBannerInfo}
        title={presentationData.Title}
        subtitle={presentationData.SubTitle}
        video={presentationData.Video}
        partners={partners.data}
        coursesText={coursesText.data!}
        coursesData={coursesData.data!}
      />
    );
  }

  return (
    <Display
      data={result.data}
      title={presentationData.Title}
      subtitle={presentationData.SubTitle}
      video={presentationData.Video}
      partners={partners.data}
      coursesText={coursesText.data!}
      coursesData={coursesData.data!}
    />
  );
};

export default HomePage;
