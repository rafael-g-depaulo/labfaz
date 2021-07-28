import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin: 50px 0 -12px 0;

  ${Mobile(css`
    height: 340px;
    margin: 40px 0 10px 0;
  `)}
`;

export const MarkdownStyles = styled.div`
  margin: 0;
  color: var(--color-text-white);
  text-align: justify;
  line-height: 40px;

  & > div {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin: 50px 0 -12px 0;
  }

  & > p,
  ul,
  ol {
    margin: 50px 0 0 0;

    & > em {
      font-weight: 200;
    }

    & > a {
      color: var(--color-text-white);
      text-decoration: underline;

      &:hover {
        color: var(--color-text-pink);
      }
    }
  }

  & > b,
  li {
    margin: 0;

    & > em {
      font-weight: 200;
    }

    & > a {
      color: var(--color-text-white);
      text-decoration: underline;

      &:hover {
        color: var(--color-text-pink);
      }
    }
  }

  ${Mobile(css`
    width: 100%;
    margin: 15px 0;
    line-height: 2;

    & > div {
      margin: 40px 0 30px 0;
    }

    & > p,
    ul,
    ol {
      font-size: var(--font-size-large);
      margin: 20px 0 0 0;

      & > em {
        font-size: var(--font-size-large);
      }

      & > a {
        font-size: var(--font-size-large);
      }
    }

    & > b,
    li {
      font-size: var(--font-size-large);
      margin: 0;

      & > em {
        font-size: var(--font-size-large);
      }

      & > a {
        font-size: var(--font-size-large);
      }
    }
  `)}
`;
