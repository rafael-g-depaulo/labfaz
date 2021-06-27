import styled from 'styled-components'
import mobileOnly from 'Utils/breakpoints/mobileOnly'

interface WrapperProps {
  color?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  backgroundColor?: string
}

interface ImageProps {
  height?: string,
  maxHeight?: string,
  width?: string,
  maxWidth?: string
  position?: string
}

interface ContainerProps {
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  isWelcome?: boolean
}

export interface DivProps {
  height?: string,
  width?: string,
  position?: string
}

export interface ParagraphProps {
  textAlign?: String
  weight?: String
  marginTop?: String | any,
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 100vw;
  height: 40%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;

  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0"};
  margin-top: ${props => props.marginTop ? props.marginTop : "0"};
  margin-left: ${props => props.marginLeft ? props.marginLeft : "0"};
  margin-right: ${props => props.marginRight ? props.marginRight : "0"};

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
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
  max-height: 500px;
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
  max-height: ${props => props.maxHeight ? props.maxHeight : "400px"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "789px"};
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
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

export const Paragraph = styled.p<ParagraphProps>`
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
