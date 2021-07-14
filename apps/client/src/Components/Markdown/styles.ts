import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";
import { Text } from "Components/Typography/Text";

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 50px 0 0 0;

  ${Mobile(css`
    height: 340px;
    margin: 40px 0 10px 0;
  `)}
`;

export const MarkdownStyles = styled(Text)`
  margin: 0;
  color: var(--color-text-white);
  text-align: justify;
  line-height: 1.5;

  & > div {
    width: 100%;
    height: 400px;
  }

  & > p {
    margin: 50px 0 0 0;
  }

  & > b,
  i,
  li,
  ul,
  ol {
    margin: 0;
  }

  ${Mobile(css`
    width: 100%;
    margin: 15px 0;
    line-height: 2;

    & > div {
      height: 340px;
    }

    & > p {
      margin: 20px 0 0 0;
      font-size: var(--font-size-large);
    }

    & > b,
    i,
    li,
    ul,
    ol {
      margin: 0;
      font-size: var(--font-size-large);
    }
  `)}
`;
