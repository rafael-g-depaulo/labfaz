import React, { FC } from "react";

import {
  MainTextContainer,
  PostTitle,
  MarkdownStyles,
  Image,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import { formatPostDate } from "Utils/formatPostDate";

import ReactMarkdown from "react-markdown";

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
        <MarkdownStyles>
          <ReactMarkdown
            children={content}
            components={{
              p: ({ node, children }) => {
                if (node.children[0].tagName === "img") {
                  const image: any = node.children[0];
                  return (
                    <Image
                      src={`${image.properties.src}`}
                      alt={image.properties.alt}
                    />
                  );
                }
                // Return default child if it's not an image
                return <MarkdownStyles>{children}</MarkdownStyles>;
              },
            }}
          />
        </MarkdownStyles>
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
