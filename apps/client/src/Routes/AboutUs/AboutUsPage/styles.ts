import styled, { css } from 'styled-components'
import { Mobile, DesktopSmall, MobileLarge, MobileSmall, DesktopLarge, Desktop } from 'Utils/breakpoints'

interface WrapperProps {
  color?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
}

interface ImageProps {
  position?: string
}

interface ContainerProps {
  marginBottom?: string,
  marginTop?: string,
  about?: boolean | string
}

export interface DivProps {
  height?: string,
  width?: string,
  position?: string
}

export const Spacer = styled.div`
  padding-bottom: 2.4rem;
`

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: var(--max-content-width);
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;

  background-color: var(--background-black);
  color: var(--color-text-white);
`

export const Container = styled.div<ContainerProps>`
  display: grid;
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "top"
    "bottom"
  ;
  text-align: justify;
  align-items: center;
  justify-content: center;

  background-color: var(--background-black);
  color: var(--color-text-white);

  ${Desktop(css`
    padding: 1.6em 2.4em;
    align-items: flex-start;
  `)}

  ${props => DesktopLarge(css`
    grid-template-columns: ${props.about ? "3fr 2fr" : "2fr 3fr"};
    grid-template-areas: "left right";
    grid-column-gap: 2.4em;
  `)}

  ${DesktopSmall(css`
    grid-row-gap: 1.6rem;

    align-items: center;
    justify-content: center;
  `)}

  ${Mobile(css`
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "top"
      "bottom"
    ;
    grid-row-gap: 1.6rem;
    padding: 1.6em 1.2em;
    p { 
      line-height: var(--line-height-medium) !important;
    }
  `)}
`

export const Image = styled.img<ImageProps>`
  width: 100%;
  object-fit: contain;
  object-position: center center;
  margin: auto;
  grid-area: ${props => props.position ? props.position : "right"};

  ${Mobile(css`
    align-self: center;
    justify-self: center;
    grid-area: bottom;
  `)}

  ${MobileLarge(css`
    align-self: center;
    justify-self: center;
    grid-area: bottom;
  `)}

  ${DesktopSmall(css`
    align-self: center;
    justify-self: center;
    grid-area: bottom;
  `)}
`

export const TextDiv = styled.div<DivProps>`
  display: flex;
  width: 100%;
  min-height: fit-content;
  grid-area: ${props => props.position ? props.position : "left"};

  p {
    color: var(--color-text-white);
    line-height: var(--line-height-default);
  }

  ${Mobile(css`
    grid-area: top;
  `)}

  ${MobileLarge(css`
    display: flex;
    flex-direction: column;
    justify-items: center;
  `)}

  ${MobileSmall(css`
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: justify;
  `)}

  ${DesktopSmall(css`
    align-self: center;
    justify-self: center;
    grid-area: top;
  `)}
`
