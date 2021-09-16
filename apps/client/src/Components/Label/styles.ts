import styled, { css } from "styled-components";
import { Text } from "Components/Typography/Text";
import { Mobile } from "Utils/breakpoints";

interface Props {
  icon: boolean;
}

export const Container = styled.div`
  width: 145px;
  background-color: #090909;
  border-radius: 64px;
  display: grid;
  grid-template-columns: 18px auto 18px;
  grid-template-rows: 30px;
  grid-template-areas: "image text .";
  margin-right: 20px;

  ${Mobile(css`
    margin-right: 0px;
  `)}
`;

export const LabelText = styled(Text)`
  grid-area: text;
  justify-self: center;
  align-self: center;
  color: var(--color-text-white);
  font-size: var(--font-size-small);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const LabelImage = styled.img<Props>`
  grid-area: image;
  display: ${(props) => (props.icon ? "flex" : "none")};
  justify-self: center;
  align-self: center;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
