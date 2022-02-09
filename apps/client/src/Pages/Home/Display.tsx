import { FC } from "react";

import Wireframe from "Components/Wireframe";
import Partners from "Components/Partners";
import Presentation from "Components/Presentation";
// import CoursesPresentation from "Components/CoursesPresentation";
import Banner from "Components/Banner";

import useMobile from "Hooks/useMobile";

import { HomepageBannerInfo } from "Api/HomepageBannerInfo";
import { HomePartners } from "Api/HomePartners";
import { Homepage } from "Api/Homepage";
// import { CoursePresentation } from "Api/CoursePresentation";

export interface DisplayProps {
  data: HomepageBannerInfo;
  title: string | null;
  subtitle: string | null;
  video: string | null;
  partners: HomePartners[] | null;
  coursesText: Homepage | null;
  // coursesData: CoursePresentation[] | null;
}

export const Display: FC<DisplayProps> = ({
  data,
  title,
  subtitle,
  video,
  partners,
  // coursesText,
  // coursesData,
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
          {title && subtitle && video ? (
            <Presentation title={title} subtitle={subtitle} video={video} />
          ) : (
            <></>
          )}
          {partners ? <Partners partners={partners} /> : <></>}
        </>
      ) : (
        <>
          {partners ? <Partners partners={partners} /> : <></>}
          {title && subtitle && video ? (
            <Presentation title={title} subtitle={subtitle} video={video} />
          ) : (
            <div style={{ paddingTop: "3.5em" }} />
          )}
        </>
      )}
      {/* {coursesText && coursesData ? (
        <CoursesPresentation texts={coursesText} courses={coursesData} />
      ) : (
        <></>
      )} */}
    </Wireframe>
  );
};

export default Display;
