import styled, { css } from 'styled-components'
import { Mobile, DesktopSmall, MobileLarge, MobileSmall } from 'Utils/breakpoints'

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


export const Wrapper = styled.div<WrapperProps>`
  max-width: 100vw;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;

  background-color: var(--background-black);
  color: var(--color-text-white);
`

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${props => props.about ? "2fr 1fr" : "1fr 2fr"};
  grid-template-rows: auto auto;
  grid-template-areas:
  "left right"
  "left right";
  grid-column-gap: 4em;
  grid-row-gap: 25vh;
  min-height: 400px;
  max-height: 1000px;
  max-width: 100%;
  line-height: var(--line-height-default);
  margin: 0 5vw;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
  margin-top: ${props => props.marginTop ? props.marginTop : ""};
  font-size: var(--font-size-default);

  background-color: var(--background-black);
  color: var(--color-text-white);

  ${
    Mobile(css`
      margin: 0 2vw;
      grid-template-rows: auto auto;
      grid-template-areas:
      "top top"
      "bottom bottom";
      grid-column-gap: 14vw;
      grid-row-gap: 1vh;

      margin-bottom: 7vh;
      margin-top: 4vh;

      align-items: center;
      justify-content: center;
    `)
  }

${
    MobileLarge(css`
      margin: 0 2vw;
      grid-template-rows: auto auto;
      grid-template-areas:
      "top top"
      "bottom bottom";
      grid-column-gap: 14vw;
      grid-row-gap: 1vh;

      margin-bottom: 7vh;
      margin-top: 4vh;

      align-items: center;
      justify-content: center;

      font-size: var(--font-size-medium);
      line-height: var(--line-height-medium);
    `)
  }
  
  ${
    DesktopSmall(css`
      margin: 0 2vw;
      grid-template-rows: auto auto;
      grid-template-areas:
      "top top"
      "bottom bottom";
      grid-column-gap: 14vw;
      grid-row-gap: 1vh;

      margin-bottom: 7vh;
      margin-top: 4vh;

      align-items: center;
      justify-content: center;

      font-size: var(--font-size-large);
      line-height: var(--line-height-medium);
    `)
  }

`

export const Image = styled.img<ImageProps>`
  max-height: 400px;
  max-width: 789px;
  min-width: auto;
  object-fit: contain;
  grid-area: ${props => props.position ? props.position : "right"};

  ${Mobile(
    css`
    max-height: 75%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
    justify-self: center;
    grid-area: bottom;
    `
  )}

${MobileLarge(
    css`
    max-height: 75%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
    justify-self: center;
    grid-area: bottom;
    `
  )}

${DesktopSmall(
    css`
    max-height: 75%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
    justify-self: center;
    grid-area: bottom;
    `
  )}
`

export const TextDiv = styled.div<DivProps>`
  display: flex;
  max-width: 100%;
  min-height: fit-content;
  grid-area: ${props => props.position ? props.position : "left"};
  

  ${Mobile(css`
    max-width: 100%;
    grid-area: top;
  `)}

  ${
    MobileLarge(css`
      display: flex;
      flex-direction: column;

      max-width: 90%;

      justify-items: center;
    `)
  }

${
    MobileSmall(css`
      display: flex;
      flex-direction: column;

      max-width: 90%;

      justify-self: center;

      text-align: justify;
    `)
  }

${DesktopSmall(
    css`
    max-height: 80%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
    justify-self: center;
    grid-area: top;
    `
  )}
`
