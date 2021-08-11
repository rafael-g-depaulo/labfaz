import React, { FC } from "react";
//import Wireframe from "Components/Wireframe";
import Title from "./Title";
import Card from "./Card";
import { MainContainer, MainContent, TopWrapper } from "./styles";

export const Display: FC = () => {
  return (
    <MainContainer>
      <MainContent>
        <TopWrapper>
          <Title />
          <Card />
        </TopWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default Display;
