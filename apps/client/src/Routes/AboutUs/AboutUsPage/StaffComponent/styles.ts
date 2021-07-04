import styled, { css } from 'styled-components'
import { Paragraph } from 'Components/Text/style'
import { Mobile } from 'Utils/breakpoints'

import { ParagraphProps } from 'Components/Text/style'

interface CircleProps {
  color: string
}

type SpanProps = ParagraphProps


export const StaffGrid = styled.div`
  display: grid;
  grid-gap: 7vw;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  
  align-items: center;
  align-self: center;
  justify-content: center;

  max-width: 90vw;

  color: var(--color-text-yellow);
`;

export const StaffHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 10vh;

  color: var(--color-text-yellow);
`

export const StaffTitle = styled.h1`
  font-size: var(--font-size-title);
  font-family: var(card-font-family);
`;

export const StaffSubtitle = styled.h2`
  font-family: var(card-font-family);
  font-size: var(--font-size-medium);
`


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  max-height: 362px;
  max-width: 229px;
  min-width: 229px;
  min-height: 362px;
  font-size: var(--font-size-short);
  font-family: var(--card-font-family);
  flex-direction: column;
  align-items: center;


  border: solid 2px #0C74FF;
  box-shadow: inset 2px -1px #FFEC99,2px 0px #FFEC99;
  border-radius: 14.3px;

`


export const CardThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 160px;
  max-width: 100%;

  margin-top: 1em;

  font-weight: 700;
  font-family: var(--card-font-family) ;

  position: relative;

  img {
    width: 100%;
    max-width: 160px;
    clip-path: circle();
    z-index: 99999999999999;
    background-color: var(--background-yellow);

    margin-top: 1vh;
  }
`;

export const CardBody = styled.div`
  max-height: 130px;
  max-width: 80%;
`;


export const Text = styled(Paragraph)`
  max-height: min-content;
  font-family: var(--card-font-family);
    ${
    Mobile(css`
      font-size: var(--font-size-short);
      line-height: 25px;
      align-items: baseline;
    `)
  }
`;

export const Span = styled.span<SpanProps>`
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ''};
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
  font-size: ${props => props.fontSize ? 
  "var(--font-size-"+ props.fontSize + ")" 
  :
  "var(--font-size-default)"
  };
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
  color: ${props => props.color ? 
  "var(--color-text-"+ props.color + ")" 
  :
  "var(--color-text-yellow)"
  };
`

export const Circle = styled.div<CircleProps>`
  background-color: ${props => "var(--background-" + props.color + ")"};
  max-width: 126px;
  max-height: 126px;
  min-width: 126px;
  min-height: 126px;
  border-radius: 50%;

  z-index: ${props => props.color === 'yellow' ? 99999 : 0};

  position: absolute;
  top: ${props => props.color === 'yellow' ? '-7px' : '-11px'};
  right: ${props => props.color === 'yellow' ? '13px' : '19px'};
`
