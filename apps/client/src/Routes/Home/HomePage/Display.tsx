import React, { FC } from "react";

import Wireframe from "Components/Wireframe";
import Partners from "Components/Partners";
import Presentation from "Components/Presentation";
import CoursesPresentation from "Components/CoursesPresentation";
import Banner from "Components/Banner";

import useMobile from "Utils/useMobile";

import { HomepageBannerInfo } from "Api/HomepageBannerInfo";
import { Homepage } from "Api/Homepage";
import { CoursePresentation } from "Api/CoursePresentation";
import { HomePartners } from "Api/HomePartners";

export interface DisplayProps {
  data: HomepageBannerInfo;
  texts: Homepage;
  courses: CoursePresentation[];
  partners: HomePartners[];
}

export const Display: FC<DisplayProps> = ({
  data,
  texts,
  courses,
  partners,
}) => {
  const mobile = useMobile();

  return (
    <Wireframe>
      <Banner
        title={data.title}
        subtitle={data.subtitle}
        image={data.image || undefined}
      />
      {mobile ? (
        <>
          <Presentation />
          <Partners partners={partners} />
        </>
      ) : (
        <>
          <Partners partners={partners} />
          <Presentation />
        </>
      )}
      <CoursesPresentation texts={texts} courses={courses} />
    </Wireframe>
  );
};

export default Display;
