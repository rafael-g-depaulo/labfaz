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

export interface Props {
  title: string;
  date: string;
  description: string;
  width: string;
  height: string;
}

export const Card: FC<Props> = ({
  title,
  date,
  description,
  width,
  height,
}) => {
  return (
    <Container width={width} height={height}>
      <Image />
      <TextWrapper>
        <TopWrapper>
          <CardTitle>{title}</CardTitle>
          <CardDate>{date}</CardDate>
        </TopWrapper>
        <CardText>{description}</CardText>
      </TextWrapper>
    </Container>
  );
};

export default Card;
