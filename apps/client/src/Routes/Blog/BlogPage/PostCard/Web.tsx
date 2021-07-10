import React, { FC } from "react";

import {
  MainTextContainer,
  PostTitle,
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
  const yearRegExp = /[0-9]{4}/;
  const isYear = yearRegExp.test(formatPostDate(created_at)?.hour);

  return (
    <>
      <MainTextContainer>
        <PostTitle>{title}</PostTitle>
        <Description>{description}</Description>
        {!!image && <Image src={image.url} alt={image.name} />}
        <ButtonLayer />
        <Button href="">
          <ButtonText>leia mais</ButtonText>
        </Button>
      </MainTextContainer>
      <Divisor />
      <DateContainer>
        <Date size="var(--font-size-subtitle)">
          {formatPostDate(created_at)?.day}
        </Date>
        <Date
          size={
            isYear
              ? "var(--font-size-title-medium)"
              : "var(--font-size-subtitle)"
          }
        >
          {formatPostDate(created_at)?.hour}
        </Date>
      </DateContainer>{" "}
    </>
  );
};

export default Web;
