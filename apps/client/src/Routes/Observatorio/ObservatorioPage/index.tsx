import React, { FC } from "react";

import Display from "./Display";

// import Error from "Pages/Error";
// import LoadingFullPage from "Components/LoadingFullPage";

// import { useObservatorioPosts } from "Api/ObservatorioPost";
// import { useObservatorioBannerInfo } from "Api/ObservatorioBannerInfo";

export const ObservatorioPage: FC = () => {
  // const bannerInfo = useObservatorioBannerInfo();
  // const posts = useObservatorioPosts();

  // if (bannerInfo.isLoading || posts.isLoading) return <LoadingFullPage />;

  // if (posts.error) {
  //   // console.log(posts.error);
  //   return (
  //     <Error
  //       errorStatus={posts.error.response?.status}
  //       errorMessage={posts.error.response?.statusText}
  //     />
  //   );
  // }

  // if (bannerInfo.error) {
  //   // console.log(bannerInfo.error);
  //   return <Display />
  // }

  return <Display />
};

export default ObservatorioPage;
