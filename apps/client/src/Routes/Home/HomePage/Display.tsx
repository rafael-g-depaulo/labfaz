import React, { FC } from "react";

import Wireframe from "Components/Wireframe";
import Partners from "Components/Partners";
import Presentation from "Components/Presentation";
import CoursesPresentation from "Components/CoursesPresentation";
import Banner from "Components/Banner";

import useMobile from "Utils/useMobile";

import { HomepageBannerInfo } from "Api/HomepageBannerInfo";

export interface DisplayProps {
  data: HomepageBannerInfo;
}

export const Display: FC<DisplayProps> = ({ data }) => {
  const mobile = useMobile();

  return (
    <Wireframe>
      {mobile ? (
        <>
        <Banner title={data.title} subtitle={data.subtitle} />
          <Presentation />
          <Partners />
          <CoursesPresentation />
        </>
      ) : (
        <>
          <Banner title={data.title} subtitle={data.subtitle} />
          <Partners />
          <Presentation />
          <CoursesPresentation />
        </>
      )}
    </Wireframe>
  );
};

export default Display;
