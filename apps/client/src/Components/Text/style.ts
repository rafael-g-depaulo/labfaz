import styled, { css } from "styled-components"
import { Mobile } from "Utils/breakpoints"

export interface ParagraphProps {
  textAlign?: string
  weight?: string
  marginTop?: string
  marginBottom?: string
  fontSize?: string
  color?: string
  fontWeight?: number
}


export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  margin-top: 0;
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
  font-size: ${props => props.fontSize ? 
  "var(--font-size-"+ props.fontSize + ")" 
  :
  "var(--font-size-default)"
  };
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};

  ${
    Mobile(css`
      font-size: var(--font-size-large);
      line-height: 25px;
      align-items: baseline;
    `)
  }
`
