import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { DesktopSmall } from "Utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px 80px 80px 80px;
  background-color: #2daf2f;
  filter: drop-shadow(0 4px 14px rgba(45, 175, 47, 0.33));
  border: 3px solid rgba(45, 175, 47, 0.66);

  ${DesktopSmall(css`
    height: 400px;
    padding: 40px 40px 40px 40px;
    justify-content: center;
  `)}
`;

export const MainTitle = styled(Title)`
  font-size: var(--font-size-title-xlarge);
  text-align: left;
  line-height: 1;

  ${DesktopSmall(css`
    font-size: var(--font-size-title);
  `)}
`;

export const Subtitle = styled(Text)`
  font-size: var(--font-size-title-short);
  text-align: justify;
  margin: 40px 0;

  ${DesktopSmall(css`
    font-size: var(--font-size-default);
  `)}
`;

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
