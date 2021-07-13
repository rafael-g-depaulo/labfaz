import React, { FC } from "react";

import {
  MainTextContainer,
  PostTitle,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import { formatPostDate } from "Utils/formatPostDate";

import Markdown from "Components/Markdown";

import SocialMediaIcons from "Components/SocialMediaIcons";

interface DisplayProps {
  title: string;
  description: string;
  image: any;
  created_at: string;
  content: string;
}

export const Web: FC<DisplayProps> = ({ title, created_at, content }) => {
  const yearRegExp = /[0-9]{4}/;
  const isYear = yearRegExp.test(formatPostDate(created_at)?.hour);

  return (
    <>
      <MainTextContainer>
        <PostTitle>{title}</PostTitle>
        <Markdown content={content} />
        <SocialMediaIcons />
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
