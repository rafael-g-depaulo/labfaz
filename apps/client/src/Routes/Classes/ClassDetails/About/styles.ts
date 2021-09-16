import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { DesktopSmall } from "Utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 70px 80px 70px 80px;
  background-color: var(--background-black);

  ${DesktopSmall(css`
    padding: 50px 40px 40px 40px;
  `)}
`;

export const MainTitle = styled(Title)`
  font-size: var(--font-size-title-medium);
  text-align: left;
  color: var(--background-light-white);
  margin-bottom: 60px;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-small);
    margin-bottom: 40px;
  `)}
`;

export const TextContent = styled(Text)`
  font-size: var(--font-size-title-short);
  text-align: left;
  color: var(--background-light-white);
  margin-bottom: 100px;

  ${DesktopSmall(css`
    font-size: var(--font-size-default);
    margin-bottom: 80px;
  `)}
`;
