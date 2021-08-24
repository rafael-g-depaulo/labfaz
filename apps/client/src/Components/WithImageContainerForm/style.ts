import styled, { css } from 'styled-components'

import { MobileSmall, DesktopSmall, Mobile, MobileLarge, DesktopLarge } from 'Utils/breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "left right";

  max-width: 1280px;
  max-height: 707px;

  ${MobileSmall(css`
    grid-template-columns: 1fr;
    max-width: 420px;
    max-height: 100vh;
  `)}

  ${Mobile(css`
    grid-template-columns: 1fr;
    border: none;
  `)}

  ${DesktopSmall(css`
    max-width: 100vw;
    min-width: 100vw;
  `)}
  `;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  grid-area: "left";

  ${MobileSmall(css`
    display: none;
  `)}

  ${DesktopSmall(css`
    background-color: aqua;
    display: block;
  `)}
`
export const ImageDiv = styled.div`
  display: flex;
  max-width: 640px;
  max-height: 707px;
  border: 1px solid black;
  align-content: center;

  ${Mobile(css`
    border: none;
  `)}

  ${MobileLarge(css`
    display: none;
    border: none;
  `)}

  ${DesktopSmall(css`
    display: none;
    border: none;
  `)}
`
