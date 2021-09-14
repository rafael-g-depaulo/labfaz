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

import { ApiStayTuned } from "Api/StayTuned";

export interface Props {
  data: ApiStayTuned;
}

export const StayTuned: FC<Props> = ({ data }) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <Wrapper>
          <TextWrapper>
            <MainTitle>Fique Atento</MainTitle>
            <MainText>{data.description}</MainText>
          </TextWrapper>
          <Image src={data.image.url} alt={data.image.alternativeText} />
          <Button href="">Saiba Mais</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextWrapper>
            <MainTitle>Fique Atento</MainTitle>
            <MainText>{data.description}</MainText>
            <Button href="">Saiba Mais</Button>
          </TextWrapper>
          <Image src={data.image.url} alt={data.image.alternativeText} />
        </Wrapper>
      )}
    </>
  );
};

export default StayTuned;
