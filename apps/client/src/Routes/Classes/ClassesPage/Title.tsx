import React, { FC } from "react";
import { TitleWrapper, MainTitle, SecondaryTitle, TitleText, TitleButton } from "./styles";

const Title: FC = () => {
  return (
    <TitleWrapper>
      <SecondaryTitle>Aprenda sobre</SecondaryTitle>
      <MainTitle>Lorem & Ipsum</MainTitle>
      <TitleText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.{" "}
      </TitleText>
      <TitleButton href="">comece aqui</TitleButton>
    </TitleWrapper>
  );
};

export default Title;
