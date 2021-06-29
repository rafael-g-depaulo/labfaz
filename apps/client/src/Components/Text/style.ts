import styled from "styled-components"
import mobileOnly from "Utils/breakpoints/mobileOnly"

export interface ParagraphProps {
  textAlign?: string
  weight?: string
  marginTop?: string
  fontSize?: string
  color?: string
}


export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  margin-top: 0;
  font-size: var(--font-size-default);
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
  font-size: ${props => props.fontSize ? 
  "var(--font-size-"+ props.fontSize + ")" 
  :
  "var(--font-size-default)"
  };


  ${
    mobileOnly(`
      font-size: var(--font-size-large);
      line-height: 25px;
      align-items: baseline;
    `)
  }
`
