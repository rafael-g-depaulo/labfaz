import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";
import { Text } from "Components/Typography/Text";

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 50px 0;
  ${Mobile(css`
    height: 295px;
    margin: 0 0 40px 0;
  `)}
`;

export const MarkdownStyles = styled(Text)`
  margin: 35px 0 0 0;
  color: var(--color-text-white);
  text-align: justify;
  line-height: 1.5;

  & > div {
    width: 100%;
    height: 400px;
  }
 
  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 35px 0;
    line-height: 2;
  `)}
`;
