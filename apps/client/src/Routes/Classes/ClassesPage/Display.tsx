import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import Title from "./Title";
import Card from "./Card";
import {
  MainContainer,
  MainContent,
  TopWrapper,
  ClassesWrapper,
} from "./styles";

export const Display: FC = () => {
  const mainClass = [
    {
      title: "O que é audio visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  const middleClasses = [
    {
      title: "O que é audio visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      title: "O que é audio visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  return (
    <MainContainer>
      <MainContent>
        <TopWrapper>
          <Title />
          {mainClass.map((item) => {
            return (
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </TopWrapper>
        <ClassesWrapper>
          {middleClasses.map((item) => {
            return (
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </ClassesWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default Display;
