import styled from "styled-components"

export interface DivProps {
  height?: string,
  width?: string,
}

export interface ParagraphProps {
  lineHeight?: string
  fontSize?: String
  textJustify?: CSSStyleRule
  textAlign?: String
  weight?: String
}

export const TextDiv = styled.div<DivProps>`
  display: flex;
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
`

export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  line-height: ${props => props.lineHeight ? props.lineHeight : '48.7px'};
  text-align: justify;
  font-size: 26px
`
