import styled, { css } from "styled-components";
import { Text } from "Components/Typography/Text";
import { Mobile } from "Utils/breakpoints";

interface Props {
  icon: boolean;
}

interface StyleProps {
  lightMode: boolean;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;

  background-color: ${(props) => (props.lightMode ? "#fafafa" : "#090909")};
  border-radius: 100px;
  padding: 0.2em;
`;

export const LabelText = styled(Text)<StyleProps>`
  color: ${(props) => props.lightMode ? "var(--color-text-black)" : "var(--color-text-white)"};
  font-size: var(--font-size-short);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  flex-grow: 1;
  
  ${Mobile(css`
    font-size: var(--font-size-small);
  `)}
`;

export const LabelImage = styled.img<Props>`
  display: ${(props) => (props.icon ? "flex" : "none")};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  ${Mobile(css`
    width: 19px;
    height: 19px;
  `)}
`;
