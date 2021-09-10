import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import { MainContainer, MainContent } from "./styles";

import Introduction from "./Introduction";
import StayTuned from "./StayTuned";
import CardRowComponent from "./CardRowComponent";

import Wireframe from "Components/Wireframe";

export const Display: FC = () => {
  const lives = [
    {
      title: "O que é uma live 1?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      width: "240px",
      height: "290px",
      marginLeft: "0px",
      titleSize: "var(--font-size-short)",
      textSize: "var(--font-size-small)",
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

  return (
    <Wireframe>
      <MainContainer>
        <MainContent>
          <Introduction />
          <StayTuned />
          <CardRowComponent title="Cursos" classes={lives} />
          {/* <CardRowComponent title="Rodas de conversas" classes={lives} />
          <CardRowComponent title="Cursos" classes={lives} />
          <CardRowComponent title="Oficinas" classes={lives} /> */}
        </MainContent>
      </MainContainer>
    </Wireframe>
  );
};

export default Display;
