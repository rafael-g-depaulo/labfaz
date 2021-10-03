import React, { FC } from "react";

import Display from "./Display";

import Error from "Pages/Error";
import LoadingFullPage from "Components/LoadingFullPage";

import { mockImage } from "Utils/Image";

import { useObservatorioPosts } from "Api/ObservatorioPost";
import { useObservatorioBannerInfo } from "Api/ObservatorioBannerInfo";

export const ObservatorioPage: FC = () => {
  const bannerInfo = useObservatorioBannerInfo();
  const posts = useObservatorioPosts();
  const mockBannerInfo = {
    title: "Observatorio",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: mockImage({
      url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
      alternativeText: "Observatorio Banner Image",
    }),
  };

  if (bannerInfo.isLoading || posts.isLoading) return <LoadingFullPage />;

  if (posts.error) {
    // console.log(posts.error);
    return (
      <Error
        errorStatus={posts.error.response?.status}
        errorMessage={posts.error.response?.statusText}
      />
    );
  }

  if (bannerInfo.error) {
    // console.log(bannerInfo.error);
    return <Display data={mockBannerInfo} posts={posts.data!} />;
  }

  return <Display data={bannerInfo.data} posts={posts.data} />;
};

export default ObservatorioPage;
