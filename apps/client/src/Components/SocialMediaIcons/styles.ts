import styled, { css } from "styled-components";
import { Text } from "Components/Typography/Text";
import { ExternalLinkButton } from "Components/Buttons/ExternalLinkButton";
import { Mobile } from "Utils/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0 0 0;
`;

export const ShareText = styled(Text)`
  color: var(--color-text-pink);
  text-transform: uppercase;
  font-weight: 700;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 25px 0 0 0;

  ${Mobile(css`
    width: auto;
    justify-content: start;
    margin: 0;
  `)}
`;

export const IconDiv = styled(ExternalLinkButton)`
  margin: 10px 20px 0 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;
