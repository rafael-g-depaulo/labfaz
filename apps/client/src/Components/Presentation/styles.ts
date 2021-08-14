import styled, { css } from "styled-components";
import {
  DesktopSmall,
  Mobile,
  MobileSmall,
  Desktop,
  DesktopLarge
} from "Utils/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-black);
  padding: 5%;
  ${Mobile(css`
    padding: 60px 25px 25px 25px;
  `)}
  .ContainerContent {
    display: flex;
    justify-content: space-around;    
    gap: 3rem;
    margin: 80px 0 0 0;
    ${Mobile(css`
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      margin: 0;
      gap: 50px;
    `)}
  }
`;

export const Line = styled.div`
  background-color: var(--background-pink);
  height: 1px;
  width: 85%;
  ${Mobile(css`
    width: 0;
  `)}
`;

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  ${Desktop(css`
    margin: 0 0 25px 0;
  `)}
`;

export const TextTitle = styled.h1`
  font-size: var(--font-size-title);
  margin: 0;
  color: var(--color-text-white);
  ${Mobile(css`
    text-align: center;
    margin: 0 0 1rem 0;
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-title);
  `)}
`;

export const Subtitle = styled.p`
  margin: 0;
  text-align: justify;
  color: var(--color-text-white);

  ${MobileSmall(css`
    font-size: var(--font-size-title-short);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const YoutubePlayerResponsive = styled.div`
  margin: 0;
  padding: 0;
  div {
    width: 100%;
    aspect-ratio: 16 / 9;

    ${DesktopSmall(css`
      width: 18em;
      height: 280px;
      aspect-ratio: none;
    `)}

    ${DesktopLarge(css`
      width: 30em;
    `)}
  }
`;
