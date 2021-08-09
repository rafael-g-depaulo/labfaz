import styled, { css } from "styled-components";

import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { Rectangle } from "Pages/Construction/Web/style";
import { DesktopSmall } from "Utils/breakpoints";

export const Content = styled.div`
  padding: 5rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Rectangle2 = styled(Rectangle)`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
`;

export const TextWrapper = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${DesktopSmall(css`
    padding: 2rem 0 2rem 2rem;
  `)}
`;

export const TitleText = styled(Title)`
  max-width: 14rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-title);
  line-height: var(--line-height-default);

  ${DesktopSmall(css`
    font-size: var(--font-size-subtitle);
    line-height: 1.5;
  `)}
`;

export const SubtitleText = styled(Text)`
  font-weight: 700;

  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
`;
