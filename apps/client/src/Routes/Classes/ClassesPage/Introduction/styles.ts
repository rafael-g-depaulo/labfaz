import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { Mobile } from "Utils/breakpoints";

export const TitleWrapper = styled.div`
  max-width: 38%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1;

  ${Mobile(css`
    width: 100%;
    max-width: none;
    padding: 50px 30px;
  `)}
`;

export const SecondaryTitle = styled(Title)`
  font-size: var(--font-size-subtitle);
  margin: 0 0 25px 0;

  ${Mobile(css`
    font-size: var(--font-size-default);
    margin: 0 0 10px 0;
  `)}
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-black);
  font-size: var(--font-size-title-xxxlarge);

  ${Mobile(css`
    font-size: var(--font-size-title);
  `)}
`;

export const TitleText = styled(Text)`
  margin: 50px 0 0 0;
  text-align: left;
  line-height: 2;

  ${Mobile(css`
    font-size: var(--font-size-large);
    margin: 35px 0 0 0;
  `)}
`;
