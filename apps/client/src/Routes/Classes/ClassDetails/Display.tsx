import React, { FC } from "react";

import { Course } from "Api/Courses";

import About from "./About";
import Details from "./Details";
import Introduction from "./Introduction";

import Wireframe from "Components/Wireframe";

import { Container, FirstRow, SecondRow } from "./styles";

import useMobile from "Utils/useMobile";
import MobileCoursePage from "./Mobile";

export interface Props {
  data: Course;
}

export const Display: FC<Props> = ({ data }) => {
  console.log(data);

  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <MobileCoursePage course={data} />
      ) : (
        <Wireframe>
          <Container>
            <FirstRow>
              <Introduction
                title={data?.name}
                description={data?.short_description}
                tags={data?.tags}
              />
              <About about={data?.about} requirements={data?.requirements} />
            </FirstRow>
            <SecondRow>
              <Details
                id={data?.id}
                teacher={data?.teacher}
                details={data?.detail}
                font={data?.fonte}
                banner={data?.banner}
                start_date={data?.subscription_start_date}
                finish_date={data?.subscription_finish_date}
                class_dates={data?.class_dates}
                link={data?.link}
                available={data?.available}
                has_subscription={data?.has_subscription}
              />
            </SecondRow>
          </Container>
        </Wireframe>
      )}
    </>
  );
};

export default Display;
