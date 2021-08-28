import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import Introduction from "./Introduction";
import Card from "./Card";
import CertifiedActivities from "./CertifiedActivities";
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
                width="minmax(5%, auto) minmax(300px, 570px) minmax(5%, auto)"
                height="minmax(300px, 320px) auto"
              />
            );
          })}
        </TopWrapper>
        {/* <ClassesWrapper>
          {middleClasses.map((item) => {
            return (
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
                width="minmax(5%, auto) minmax(200px, 256px) minmax(5%, auto)"
                height="minmax(150px, 185px) auto"
              />
            );
          })}
        </ClassesWrapper> */}
      <CertifiedActivities />
      </MainContent>
    </MainContainer>
  );
};

export default Display;
