import React, { FC } from "react";

import { Container, TitleWrapper, MainTitle, TitleText, Image } from "./styles";

import { CoursesPageIntroduction } from "Api/CoursesPageIntroduction";

export interface Props {
  data: CoursesPageIntroduction;
}

const Introduction: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Image src={data.image.url} alt={data.image.alternativeText} />
      <TitleWrapper>
        <MainTitle>{data.title}</MainTitle>
        <TitleText>{data.description}</TitleText>
      </TitleWrapper>
    </Container>
  );
};

export default Introduction;
