import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import { MainContainer, MainContent } from "./styles";

import Introduction from "./Introduction";
import StayTuned from "./StayTuned";
import CardRowComponent from "./CardRowComponent";

import Wireframe from "Components/Wireframe";

import icon from "./Card/icon.png";

import useMobile from "Utils/useMobile";

export const Display: FC = () => {
  const lives = [
    {
      title: "O que é uma live 1?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },
    {
      title: "O que é uma live 2?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },
    {
      title: "O que é uma live 3?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },
    {
      title: "O que é uma live 4?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },
    {
      title: "O que é uma live 5?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },
    {
      title: "O que é uma live 5?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      icon: `${icon}`,
    },

    // {
    //   title: "O que é uma live 2?",
    //   date: "23/12/2021",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    //   width: "240px",
    //   height: "290px",
    //   marginLeft: "0px",
    //   titleSize: "var(--font-size-short)",
    //   textSize: "var(--font-size-small)",
    // },
    // {
    //   title: "O que é uma live 3?",
    //   date: "12/09/2021",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    //   width: "240px",
    //   height: "290px",
    //   marginLeft: "0px",
    //   titleSize: "var(--font-size-short)",
    //   textSize: "var(--font-size-small)",
    // },
    // {
    //   title: "O que é uma live 4?",
    //   date: "12/12/2025",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    //   width: "240px",
    //   height: "290px",
    //   marginLeft: "0px",
    //   titleSize: "var(--font-size-short)",
    //   textSize: "var(--font-size-small)",
    // },
  ];

  const isMobile = useMobile();

  return (
    <Wireframe>
      <MainContainer>
        <MainContent>
          <Introduction />
          <CardRowComponent
            title="Cursos"
            classes={lives}
            color={
              isMobile
                ? "linear-gradient(to bottom, rgba(12, 116, 255, 1), rgba(0, 0, 0, 1))"
                : "linear-gradient(to bottom, rgba(252, 0, 97, 0.1), rgba(0, 0, 0, 1))"
            }
            fontColor={"var(--color-text-white)"}
          />
          <StayTuned />
          <CardRowComponent
            title="Oficinas"
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
          <CardRowComponent
            title="Lives"
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
          <CardRowComponent
            title="Rodas de Conversas"
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
        </MainContent>
      </MainContainer>
    </Wireframe>
  );
};

export default Display;
