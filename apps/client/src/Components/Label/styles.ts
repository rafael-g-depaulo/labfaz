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
  width: auto;
  background-color: ${(props) => (props.lightMode ? "#fafafa" : "#090909")};
  border-radius: 100px;
  display: grid;
  grid-template-columns: 30px auto 30px;
  grid-template-rows: 34px;
  grid-template-areas: "image text .";
  margin-right: 20px;

  ${Mobile(css`
    margin-right: 0px;
    grid-template-rows: 23px;
    grid-template-columns: 21px auto 21px;
    border-radius: 64px;
  `)}
`;

export const LabelText = styled(Text)<StyleProps>`
  grid-area: text;
  justify-self: center;
  align-self: center;
  color: ${(props) =>
    props.lightMode ? "var(--color-text-black)" : "var(--color-text-white)"};
  font-size: var(--font-size-short);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 20px;

  ${Mobile(css`
    font-size: var(--font-size-small);
    margin: 0 10px;
  `)}
`;

export const LabelImage = styled.img<Props>`
  grid-area: image;
  display: ${(props) => (props.icon ? "flex" : "none")};
  justify-self: center;
  align-self: center;
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
