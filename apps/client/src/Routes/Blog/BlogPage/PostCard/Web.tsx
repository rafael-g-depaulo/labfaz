import React, { FC } from "react";

import {
  MainTextContainer,
  Title,
  Description,
  Image,
  Button,
  ButtonText,
  ButtonLayer,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import { formatPostDate } from "Utils/formatPostDate";

interface DisplayProps {
  title: string;
  description: string;
  image: any;
  created_at: string;
}

export const Web: FC<DisplayProps> = ({
  title,
  description,
  image,
  created_at,
}) => {
  return (
    <>
      <MainTextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {!!image && <Image src={image.url} alt={image.name} />}
        <ButtonLayer />
        <Button>
          <ButtonText>leia mais</ButtonText>
        </Button>
      </MainTextContainer>
      <Divisor />
      <DateContainer>
        <Date>{formatPostDate(created_at)?.day}</Date>
        <Date>{formatPostDate(created_at)?.hour}</Date>
      </DateContainer>{" "}
    </>
  );
};

export default Web;
