import React, { FC } from "react";

import {
  MainTextContainer,
  PostTitle,
  Description,
  Image,
  Button,
  ButtonContainer,
  ButtonText,
  ButtonWrapper,
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
  id: number;
}

export const Mobile: FC<DisplayProps> = ({
  title,
  description,
  image,
  created_at,
  id,
}) => {
  const route = `/observatorio/${id}`;

  return (
    <>
      <MainTextContainer to={route}>
        <PostTitle>{title}</PostTitle>
        <Description>{description}</Description>
        {!!image && <Image src={image.url} alt={image.name} />}
      </MainTextContainer>
      <ButtonWrapper>
        <ButtonContainer>
          <Button href={route}>
            <ButtonText>leia mais</ButtonText>
          </Button>
          <ButtonLayer />
        </ButtonContainer>
        <Divisor />
        <DateContainer>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.day}
          </Date>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.hour}
          </Date>
        </DateContainer>
      </ButtonWrapper>{" "}
    </>
  );
};

export default Mobile;
