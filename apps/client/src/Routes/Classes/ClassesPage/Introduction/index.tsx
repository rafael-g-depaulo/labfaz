import React, { FC } from "react";

import { TitleWrapper, MainTitle, SecondaryTitle, TitleText } from "./styles";

const Introduction: FC = () => {
  return (
    <TitleWrapper>
      <SecondaryTitle>Aprenda sobre</SecondaryTitle>
      <MainTitle>Lorem & Ipsum</MainTitle>
      <TitleText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit.
      </TitleText>
    </TitleWrapper>
  );
};

export default Introduction;
