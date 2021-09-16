import React, { FC } from "react";

import {
  Container,
  ImageContainer,
  Image,
  TextSubContainer,
  TextContainer,
  TextBackground,
  SubscribeText,
  SubscribeButton,
  ActivityContainer,
  ActivityTitle,
  ActivityItem,
} from "./styles";

import { format } from "date-fns";

export interface Props {
  teacher: string[];
  details: string[];
  font: string[];
  banner: string;
  start_date: string;
  finish_date: string;
  class_dates: string[];
  link: string;
}

export const Details: FC<Props> = ({
  teacher,
  details,
  font,
  banner,
  start_date,
  finish_date,
  class_dates,
  link,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={banner} alt="" />
      </ImageContainer>
      <TextContainer>
        <TextSubContainer>
          <TextBackground>
            <SubscribeText>
              Inscrições até{" "}
              {format(finish_date, "DD-MM-YYYY")
                .replace("-", "/")
                .replace("-", "/")}
            </SubscribeText>
            <SubscribeButton href="">inscreva-se</SubscribeButton>
            <ActivityContainer>
              <ActivityTitle>Detalhes da atividade:</ActivityTitle>
              {details?.map((item) => (
                <ActivityItem>{item}</ActivityItem>
              ))}
            </ActivityContainer>
            <ActivityContainer>
              <ActivityTitle>Professores:</ActivityTitle>
              {teacher?.map((item) => (
                <ActivityItem>{item}</ActivityItem>
              ))}
            </ActivityContainer>
            <ActivityContainer>
              <ActivityTitle>Quem está oferecendo esse curso?</ActivityTitle>
              {font?.map((item) => (
                <ActivityItem>{item}</ActivityItem>
              ))}
            </ActivityContainer>
          </TextBackground>
        </TextSubContainer>
      </TextContainer>
    </Container>
  );
};

export default Details;
