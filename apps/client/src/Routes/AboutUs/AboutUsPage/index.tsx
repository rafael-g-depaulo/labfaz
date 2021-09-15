import React, { FC } from "react";

import Display from "./Display";

import Error from "Pages/Error";
import LoadingFullPage from "Components/LoadingFullPage";

import { mockImage } from "Utils/Image";

import { useAboutUsBannerInfo } from "Api/AboutUsBannerInfo";
import { useAboutUsdata, useTeamData } from "Api/AboutUs";

export const AboutUsPage: FC = () => {
  const aboutUs = useAboutUsdata();
  const banner = useAboutUsBannerInfo();
  const team = useTeamData();

  const mockBannerInfo = {
    title: "Sobre nós",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: mockImage({
      url:
        "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
      alternativeText: "Blog Banner Image",
    }),
  };

  // loading
  if (aboutUs.isLoading || team.isLoading || banner.isLoading)
    return <LoadingFullPage />;

  // errors
  if (aboutUs.error && team.error) {
    // console.log(aboutUs.error);
    // console.log(team.error);

    return (
      <Error
        errorStatus={aboutUs.error.response?.status}
        errorMessage={aboutUs.error.response?.statusText}
      />
    );
  }

  if (banner.error && aboutUs.error) {
    // console.log(banner.error);
    // console.log(aboutUs.error);

    return (
      <Display
        about_data={null}
        team={team.data!}
        banner_data={mockBannerInfo}
      />
    );
  }

  if (banner.error && team.error) {
    // console.log(banner.error);
    // console.log(team.error);

    return (
      <Display
        about_data={aboutUs.data!}
        team={null}
        banner_data={mockBannerInfo}
      />
    );
  }

  if (aboutUs.error) {
    // console.log(aboutUs.error);

    return (
      <Display about_data={null} team={team.data!} banner_data={banner.data!} />
    );
  }

  if (team.error) {
    // console.log(team.error);

    return (
      <Display
        about_data={aboutUs.data}
        team={null}
        banner_data={banner.data!}
      />
    );
  }

  if (banner.error) {
    // console.log(banner.error);

    return (
      <Display
        about_data={aboutUs.data}
        team={team.data}
        banner_data={mockBannerInfo}
      />
    );
  }
  
  return (
    <Display
      about_data={aboutUs.data}
      team={team.data}
      banner_data={banner.data}
    />
  );
};

export default AboutUsPage;
