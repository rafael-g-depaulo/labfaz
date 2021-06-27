import styled from "styled-components"
import mobileOnly from "Utils/breakpoints/mobileOnly"

export interface DivProps {
  height?: string,
  width?: string,
}

export interface ParagraphProps {
  textAlign?: String
  weight?: String
  marginTop?: String | any,
}

export const TextDiv = styled.div<DivProps>`
  display: flex;
  height: 100%;
  max-width: 100%;

  ${mobileOnly(`
    max-width: 75%;
  `)}
`

export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  text-align: justify;
  margin-top: 0;

  ${
    mobileOnly(`
      font-size: 16px;
      line-height: 25px;
      align-items: baseline;
    `)
  }
`
