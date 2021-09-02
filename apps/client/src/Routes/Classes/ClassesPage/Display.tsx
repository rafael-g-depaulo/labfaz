import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import { MainContainer, MainContent, TopWrapper } from "./styles";

import Introduction from "./Introduction";
import Card from "./Card";
import CertifiedActivities from "./CertifiedActivities";
import StayTuned from "./StayTuned";
import CardRowComponent from "./CardRowComponent";

export const Display: FC = () => {
  const mainClass = [
    {
      title: "O que é audio visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

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
    {
      title: "O que é uma live 2?",
      date: "23/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      width: "240px",
      height: "290px",
      marginLeft: "0px",
      titleSize: "var(--font-size-short)",
      textSize: "var(--font-size-small)",
    },
    {
      title: "O que é uma live 3?",
      date: "12/09/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      width: "240px",
      height: "290px",
      marginLeft: "0px",
      titleSize: "var(--font-size-short)",
      textSize: "var(--font-size-small)",
    },
    {
      title: "O que é uma live 4?",
      date: "12/12/2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      width: "240px",
      height: "290px",
      marginLeft: "0px",
      titleSize: "var(--font-size-short)",
      textSize: "var(--font-size-small)",
    },
  ];

  return (
    <MainContainer>
      <MainContent>
        <TopWrapper>
          <Introduction />
          {mainClass.map((item) => {
            return (
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
                width="570px"
                height="520px"
                marginLeft="12%"
                titleSize="var(--font-size-large)"
                textSize="var(--font-size-default)"
              />
            );
          })}
        </TopWrapper>
        <CertifiedActivities />
        <StayTuned />
        <CardRowComponent title="Lives" classes={lives} />
        <CardRowComponent title="Rodas de conversas" classes={lives} />
        <CardRowComponent title="Cursos" classes={lives} />
        <CardRowComponent title="Oficinas" classes={lives} />
      </MainContent>
    </MainContainer>
  );
};

export default Display;
