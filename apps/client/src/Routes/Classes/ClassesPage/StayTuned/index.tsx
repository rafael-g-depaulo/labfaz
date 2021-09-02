import React, { FC } from "react";
import { Wrapper, Image, TextWrapper, MainText, MainTitle, Button } from "./styles";

export const StayTuned: FC = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Fique Atento</MainTitle>
        <MainText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.{" "}
        </MainText>
        <Button href="">Saiba Mais</Button>
      </TextWrapper>
      <Image />
    </Wrapper>
  );
};

export default StayTuned;
