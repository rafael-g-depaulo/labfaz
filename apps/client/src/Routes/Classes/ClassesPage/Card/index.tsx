import React, { FC } from "react";
import {
  Container,
  Image,
  TextWrapper,
  CardTitle,
  DescriptionWrapper,
  LabelWrapper,
  SubscribeWrapper,
  DateContainer,
  ButtonWrapper,
  ButtonLayer,
  Button,
  ButtonText,
} from "./styles";

import image from "../Introduction/index.jpeg";

import {
  CardDescription,
  DateText,
} from "../../../../Components/CoursesPresentation/Card/styles";
import Label from "Components/Label";

export interface CardProps {
  title: string;
  date: string;
  description: string;
  icon: string | undefined;
}

export const Card: FC<CardProps> = ({ title, date, description, icon }) => {
  return (
    <Container>
      <Image src={image} alt="" />
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <DescriptionWrapper>
          <CardDescription>{description}</CardDescription>
        </DescriptionWrapper>
        <LabelWrapper>
          <Label name="audiovisual" image={icon ? icon : undefined} />
        </LabelWrapper>
        <SubscribeWrapper>
          <DateContainer>
            <DateText>Inscreva-se até</DateText>
            <DateText>{date}</DateText>
          </DateContainer>
          <ButtonWrapper>
            <ButtonLayer />
            <Button href="">
              <ButtonText>inscreva-se</ButtonText>
            </Button>
          </ButtonWrapper>
        </SubscribeWrapper>
      </TextWrapper>
    </Container>
  );
};

export default Card;
