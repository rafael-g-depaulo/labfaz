import React, { FC } from "react";

import { Container, TitleWrapper, MainTitle, TitleText, Image } from "./styles";

import image from "./index.jpeg";

const Introduction: FC = () => {
  return (
    <Container>
      <Image src={image} alt="" />
      <TitleWrapper>
      <MainTitle>Lorem & Ipsum</MainTitle>
      <TitleText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit.
      </TitleText>
    </TitleWrapper>
    </Container>
  );
};

export default Introduction;
