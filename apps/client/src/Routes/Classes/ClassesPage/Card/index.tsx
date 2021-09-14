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

import {
  CardDescription,
  DateText,
} from "../../../../Components/CoursesPresentation/Card/styles";

import Label from "Components/Label";

import { format } from "date-fns";

export interface CardProps {
  id: string;
  name: string;
  tag: string;
  short_description: string;
  available: boolean;
  banner: string;
  has_subscription: boolean;
  subscription_finish_date: string;
}

export const Card: FC<CardProps> = ({
  name,
  banner,
  subscription_finish_date,
  short_description,
}) => {
  return (
    <Container>
      <Image src={banner} alt="" />
      <TextWrapper>
        <CardTitle>{name}</CardTitle>
        <DescriptionWrapper>
          <CardDescription>{short_description}</CardDescription>
        </DescriptionWrapper>
        <LabelWrapper>
          <Label name="audiovisual" image={undefined} />
        </LabelWrapper>
        <SubscribeWrapper>
          <DateContainer>
            <DateText>Inscreva-se até</DateText>
            <DateText>
              {format(subscription_finish_date, "DD-MM-YYYY")
                .replace("-", "/")
                .replace("-", "/")}
            </DateText>
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
