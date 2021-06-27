import styled from 'styled-components'
import mobileOnly from 'Utils/breakpoints/mobileOnly'

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
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "left right"
  "left right";
  grid-column-gap: 4em;
  grid-row-gap: 2em;
  min-height: 400px;
  height: 80vh;
  max-height: 1000px;
  max-width: 100%;
  line-height: var(--line-height);
  margin: 0 5vw;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};

  ${
    mobileOnly(`
      margin: 0 2vw;
      margin-bottom: 5em;
      grid-template-areas:
      "top top"
      "bottom bottom";
    `)
  }
`

export const Image = styled.img<ImageProps>`
  max-height: 400px;
  max-width: 789px;
  height: 100%;
  width: 100%;
  grid-area: ${props => props.position ? props.position : "right"};

  ${mobileOnly(
    `
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
  height: 100%;
  max-width: 100%;
  grid-area: ${props => props.position ? props.position : "left"};

  ${mobileOnly(`
    max-width: 75%;
    grid-area: top;
  `)}
`

export const Paragraph = styled.p`
  font-style: normal;
  text-align: justify;
  margin-top: 0;

  ${
    mobileOnly(`
      font-size: 14px;
      line-height: 25px;
    `)
  }
`

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  min-height: 150px;
  height: 200px;
  max-width: 100vw;
  width: 100%;

  background-color: #C4C4C4;
  margin-bottom: 6em;

  justify-content: center;

  h1 {
    font-size: 48px;
    line-height: 10px;

  }

  * {
    margin-left: 150px;
  }

  ${mobileOnly(`
    h1 {
      font-size: 40px
    }
  
    * {
      margin-left: 10vw;
    }
  `)}
`
