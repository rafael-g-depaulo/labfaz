import styled, { css } from "styled-components"
import { Mobile, MobileLarge, MobileSmall } from "Utils/breakpoints"

export interface ParagraphProps {
  textAlign?: string
  weight?: string
  marginTop?: string
  marginBottom?: string
  fontSize?: string
  color?: string
  fontWeight?: number
  lineHeigt?: string
}


export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ''};
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
  font-size: ${props => props.fontSize ? 
  "var(--font-size-"+ props.fontSize + ")" 
  :
  "var(--font-size-default)"
  };
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
  line-height: ${props => props.lineHeigt ? 
  "var(--line-height-"+ props.lineHeigt + ")" 
  :
  "var(--line-height-default)"
  };
  ${
    Mobile(css`
      font-size: var(--font-size-large);
      line-height: 25px;
      align-items: baseline;
    `)
  }

  ${MobileLarge(css`
    font-size: var(--font-size-large);
    line-height: var(--line-height-medium);
  `)
  }

${MobileSmall(css`
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
  `)
  }
`
