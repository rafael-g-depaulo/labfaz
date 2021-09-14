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
import { timeDifference } from "Utils/formatPostDate";

export interface CardProps {
  id: string;
  name: string;
  tag: string;
  short_description: string;
  available: boolean;
  banner: string;
  has_subscription: boolean;
  subscription_finish_date: string;
  subscription_start_date: string;
}

export const Card: FC<CardProps> = ({
  id,
  name,
  tag,
  short_description,
  available,
  banner,
  has_subscription,
  subscription_finish_date,
  subscription_start_date,
}) => {
  // const date = new Date(subscription_finish_date);
  // const actualDate = new Date();
  // const difference = timeDifference(date, actualDate);
  // const isAvailable = (available && difference < 1) ? true : false;

  const route = `/classes/${id}`;

  return (
    <Container>
      <Image src={banner} alt="" />
      <TextWrapper>
        <CardTitle>{name}</CardTitle>
        <DescriptionWrapper>
          <CardDescription>{short_description}</CardDescription>
        </DescriptionWrapper>
        <LabelWrapper>
          <Label name={tag} image={undefined} />
        </LabelWrapper>
        <SubscribeWrapper>
          <DateContainer>
            <DateText>
              {available
                ? "Inscreva-se até"
                : has_subscription
                ? "Encerrado em"
                : "Iniciará em"}
            </DateText>
            <DateText>
              {has_subscription
                ? format(subscription_finish_date, "DD-MM-YYYY")
                    .replace("-", "/")
                    .replace("-", "/")
                : format(subscription_start_date, "DD-MM-YYYY")
                    .replace("-", "/")
                    .replace("-", "/")}
            </DateText>
          </DateContainer>
          <ButtonWrapper>
            <ButtonLayer />
            <Button href={available ? route : has_subscription ? route : "#"}>
              <ButtonText>
                {available
                  ? "inscreva-se"
                  : has_subscription
                  ? "encerrado"
                  : "aberto"}
              </ButtonText>
            </Button>
          </ButtonWrapper>
        </SubscribeWrapper>
      </TextWrapper>
    </Container>
  );
};

export default Card;
