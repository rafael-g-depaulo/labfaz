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

export interface CardProps {
  title: string;
  date: string;
  description: string;
  width: string;
  height: string;
  marginLeft: string;
  titleSize: string;
  textSize: string;
}

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  width,
  height,
  marginLeft,
  titleSize,
  textSize,
}) => {
  return (
    <Container width={width} height={height} marginLeft={marginLeft}>
      <Image />
      <TextWrapper>
        <TopWrapper>
          <CardTitle titleSize={titleSize} textSize={textSize}>
            {title}
          </CardTitle>
          <CardDate titleSize={titleSize} textSize={textSize}>
            {date}
          </CardDate>
        </TopWrapper>
        <CardText titleSize={titleSize} textSize={textSize}>
          {description}
        </CardText>
      </TextWrapper>
    </Container>
  );
};

export default Card;
