import React, { FC } from "react";

import { Container, MainTitle, TextContent } from "./styles";

export interface Props {
  about: string;
  requirements: string;
}

export const About: FC<Props> = ({ about, requirements }) => {
  return (
    <Container>
      <MainTitle>Sobre essa atividade</MainTitle>
      <TextContent>{about}</TextContent>
      <MainTitle>Requisitos</MainTitle>
      <TextContent>{requirements}</TextContent>
    </Container>
  );
};

export default About;
