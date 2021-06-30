import styled, { css } from 'styled-components'
import { Mobile } from 'Utils/breakpoints'

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
}

export interface DivProps {
  height?: string,
  width?: string,
  position?: string
}


export const Wrapper = styled.div<WrapperProps>`
  max-width: 100vw;
  height: 40%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: 1fr auto;
  grid-template-areas:
  "left right"
  "left right";
  grid-column-gap: 4em;
  grid-row-gap: 25vh;
  min-height: 400px;
  max-height: 1000px;
  max-width: 100%;
  line-height: var(--line-height);
  margin: 0 5vw;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
  margin-top: ${props => props.marginTop ? props.marginTop : ""};

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
    `)
  }
`

export const Image = styled.img<ImageProps>`
  max-height: 400px;
  max-width: 789px;
  height: 100%;
  width: 100%;
  grid-area: ${props => props.position ? props.position : "right"};

  ${Mobile(
    css`
    max-height: 75%;
    max-width: 75%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
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
    max-width: 75%;
    grid-area: top;
  `)}
`
