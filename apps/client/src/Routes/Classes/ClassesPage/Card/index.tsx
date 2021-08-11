import React, { FC } from "react";
import {
  Container,
  Image,
  TopWrapper,
  TextWrapper,
  CardTitle,
  CardText,
  CardDate,
} from "./styles";

export const Card: FC = () => {
  return (
    <Container>
      <Image />
      <TextWrapper>
        <TopWrapper>
          <CardTitle>O que é audio visual?</CardTitle>
          <CardDate>22/12/2021</CardDate>
        </TopWrapper>
        <CardText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.{" "}
        </CardText>
      </TextWrapper>
    </Container>
  );
};

export default Card;
