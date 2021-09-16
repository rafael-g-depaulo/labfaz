import React, { FC } from "react";

import { MainContainer, MainContent } from "./styles";

import Introduction from "./Introduction";
import StayTuned from "./StayTuned";
import CardRowComponent from "./CardRowComponent";

import Wireframe from "Components/Wireframe";

import useMobile from "Hooks/useMobile";

import { CoursesPageIntroduction } from "Api/CoursesPageIntroduction";
import { ApiStayTuned } from "Api/StayTuned";
import { CoursesPageSections } from "Api/CoursesPageSections";

export interface Props {
  data: {
    Curso: [];
    Live: [];
    Oficina: [];
    "Roda de conversa": [];
  };
  introduction: CoursesPageIntroduction | undefined;
  stayTuned: ApiStayTuned | undefined;
  sections: CoursesPageSections;
}

export const Display: FC<Props> = ({
  data,
  introduction,
  stayTuned,
  sections,
}) => {
  const courses = data.Curso;
  const lives = data.Live;
  const workshops = data.Oficina;
  const talks = data["Roda de conversa"];

  const isMobile = useMobile();

  return (
    <Wireframe>
      <MainContainer>
        <MainContent>
          {introduction ? <Introduction data={introduction} /> : <></>}
          {courses.length > 0 ? (
            <CardRowComponent
              title={sections.first_title}
              subtitle={sections.first_subtitle}
              classes={courses}
              color={
                isMobile
                  ? "linear-gradient(to bottom, rgba(12, 116, 255, 1), rgba(0, 0, 0, 1))"
                  : "linear-gradient(to bottom, rgba(252, 0, 97, 0.1), rgba(0, 0, 0, 1))"
              }
              fontColor={"var(--color-text-white)"}
            />
          ) : (
            <></>
          )}
          {stayTuned ? <StayTuned data={stayTuned} /> : <></>}
          {workshops.length > 0 ? (
            <CardRowComponent
              title={sections.second_title}
              subtitle={sections.second_subtitle}
              classes={workshops}
              color={
                isMobile
                  ? "linear-gradient(to bottom, rgba(45, 175, 47, 1), rgba(0, 0, 0, 1))"
                  : "transparent"
              }
              fontColor={
                isMobile ? "var(--color-text-black)" : "var(--color-text-white)"
              }
            />
          ) : (
            <></>
          )}
          {lives.length > 0 ? (
            <CardRowComponent
              title={sections.third_title}
              subtitle={sections.third_subtitle}
              classes={lives}
              color={
                isMobile
                  ? "linear-gradient(to bottom, rgba(45, 175, 47, 1), rgba(0, 0, 0, 1))"
                  : "transparent"
              }
              fontColor={
                isMobile ? "var(--color-text-black)" : "var(--color-text-white)"
              }
            />
          ) : (
            <></>
          )}
          {talks.length > 0 ? (
            <CardRowComponent
              title={sections.fourth_title}
              subtitle={sections.fourth_subtitle}
              classes={talks}
              color={
                isMobile
                  ? "linear-gradient(to bottom, rgba(45, 175, 47, 1), rgba(0, 0, 0, 1))"
                  : "transparent"
              }
              fontColor={
                isMobile ? "var(--color-text-black)" : "var(--color-text-white)"
              }
            />
          ) : (
            <></>
          )}
        </MainContent>
      </MainContainer>
    </Wireframe>
  );
};

export default Display;
