import React, { FC } from "react";
import {
  Wrapper,
  Image,
  TextWrapper,
  MainText,
  MainTitle,
  Button,
} from "./styles";
import useMobile from "Utils/useMobile";

import image from "./index.jpeg";

export const StayTuned: FC = () => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <Wrapper>
          <TextWrapper>
            <MainTitle>Fique Atento</MainTitle>
            <MainText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </MainText>
          </TextWrapper>
          <Image src={image} alt="" />
          <Button href="">Saiba Mais</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextWrapper>
            <MainTitle>Fique Atento</MainTitle>
            <MainText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit.
            </MainText>
            <Button href="">Saiba Mais</Button>
          </TextWrapper>
          <Image src={image} alt="" />
        </Wrapper>
      )}
    </>
  );
};

export default StayTuned;
