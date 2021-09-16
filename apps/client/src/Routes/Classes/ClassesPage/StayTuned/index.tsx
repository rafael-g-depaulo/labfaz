import React, { FC } from "react";
import {
  Wrapper,
  Image,
  TextWrapper,
  MainText,
  MainTitle,
  Button,
} from "./styles";
import useMobile from "Hooks/useMobile";

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
            <MainTitle>{data.title}</MainTitle>
            <MainText>{data.description}</MainText>
          </TextWrapper>
          <Image src={data.image.url} alt={data.image.alternativeText} />
          <Button href={data.link}>Saiba Mais</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextWrapper>
            <MainTitle>{data.title}</MainTitle>
            <MainText>{data.description}</MainText>
            <Button href={data.link}>Saiba Mais</Button>
          </TextWrapper>
          <Image src={data.image.url} alt={data.image.alternativeText} />
        </Wrapper>
      )}
    </>
  );
};

export default StayTuned;
