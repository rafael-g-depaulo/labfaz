import styled, { css } from 'styled-components'

import { MobileSmall, DesktopSmall, Mobile, MobileLarge } from 'Utils/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1280px;
  max-height: 860px;
  min-height: 80%;
  min-width: 67%;


  ${MobileSmall(css`
    min-width: 100%;
    max-width: 305px;
    min-height: 90vh;
    align-items: center;
    justify-content: center;
  `)}

  ${Mobile(css`
    min-width: 100%;
    max-width: 305px;
    min-height: 90vh;
    align-items: center;
    justify-content: center;
  `)}

  ${DesktopSmall(css`
    max-width: 400px;
    min-height: 90vh;
    align-items: center;
    justify-content: flex-start;
  `)}
  `;

export const Frame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

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
  min-height: 100%;
  min-width: 50%;
  align-content: center;

  ${Mobile(css`
    border: none;
    display: none;
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

export const Line = styled.div`
  min-height: 2px;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1));
  width: 100%;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.05);
  margin-bottom: 3.5rem;

  ${MobileLarge(css`
    display: none
  `)}

  ${MobileSmall(css`
    display: none
  `)}
`

export const PageTitle = styled.h1`
  font-size: var(--font-size-title-xxlarge);
  justify-self: center;
  margin-top: 3vh;
  margin-bottom: 2vh;
  color: rgba(252, 0, 97, 1);

  ${DesktopSmall(css`
    display: block;
  `)}

  ${MobileLarge(css`
    display: none;
  `)}

  ${MobileSmall(css`
    display: none;
  `)}
`

export const Content = styled.div`
  display: flex;
  max-height: 707px;
  max-width: 640px;
  min-width: 100%;
  min-height: 100%;

  align-content: center;
  justify-items: center;

  
  box-sizing: border-box;
  
  border: 5px solid rgba(17, 16, 16, 0.5);
    box-shadow: 0px 0px 10px rgba(64, 64, 64, 0.6);
    border-radius: 7px;

  ${DesktopSmall(css`
    min-height: 100%;
  `)}

  ${Mobile(css`
    min-width: 80%;
  `)}
`
