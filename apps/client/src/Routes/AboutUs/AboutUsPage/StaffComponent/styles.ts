import styled, { css } from 'styled-components'
import { Mobile, MobileSmall, DesktopSmall, MobileLarge } from 'Utils/breakpoints'


interface CircleProps {
  color: string
}

interface SpanProps  {
  marginTop?: string,
  marginBottom?: string,
  color?: string,
  fontSize?: string,
  fontWeight?: number,
  textAlign?: string
}

export const StaffGrid = styled.div`
  display: grid;
  grid-gap: 7vw;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  
  align-items: center;
  align-self: center;
  justify-content: center;

  max-width: 90vw;

  color: var(--color-text-beige);

  ${MobileLarge(css`
    max-width: 90vw;
    min-height: 100vh;
  `)}

  ${Mobile(css`
    max-width: 100vw;
    min-height: 100vh;

  `)}
`;

export const StaffHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 10vh;

  color: var(--color-text-beige);
`

export const StaffTitle = styled.h1`
  font-size: 42px;
  font-family: var(card-font-family);
`;

export const StaffSubtitle = styled.h2`
  font-family: var(card-font-family);
  font-size: var(--font-size-medium);

  ${Mobile(css`
    font-size: var(--font-size-default);
    text-align: center;
    max-width: 293px;
  `)}

  ${DesktopSmall(css`
      font-size: var(--font-title-small);
  `)}
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
  align-items: center;


  border: solid 2px #0C74FF;
  box-shadow: inset 2px -1px #FFEC99,2px 0px #FFEC99;
  border-radius: 14.3px;

  ${MobileSmall(css`
    max-width: 150px;
    max-height: 240px;
    min-width: 150px;
    min-height: 240px;
    `)}

  ${MobileLarge(css`
    max-width: 150px;
    max-height: 240px;
    min-width: 150px;
    min-height: 240px;
  `)}

  ${Mobile(css`
    max-width: 150px;
    max-height: 240px;
    min-width: 150px;
    min-height: 240px;
  `)}

  ${DesktopSmall(css`
    min-height: 290px;
    max-height: 290px;
    max-width: 190px;
    min-width: 190px;
  `)}
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

  ${Mobile(css`
    max-height: 100px;
    max-width: 80%;
  `)}

  ${DesktopSmall(css`
      max-width: 75%;
      max-height: 130px;
  `)}

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

  ${Mobile(css`
    line-height: 16px;
    margin-top: 0.8em;
  `)}

  ${DesktopSmall(css`
    max-height: 130px;
    line-height: var(--line-height-small);
    font-size: var(--font-size-medium);
  `)}
`;


export const Text = styled.span<SpanProps>`
  max-height: min-content;
  font-family: var(--card-font-family);
  color: var(--color-text-white);

  ${
    Mobile(css`
      font-size: 10px;
      line-height: 16px;
      align-items: baseline;
      text-align: justify;
    `)
  }

  ${DesktopSmall(css`
      margin-top: 0;
      font-size: var(--font-size-short);
    `)}
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

  ${props => props.color ? 
    Mobile(css`
      font-size: var(--font-size-short);
    `) 
    : 
    Mobile(css`
      font-size: var(--font-size-short);
    `)
    }
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


  ${Mobile(css`
    max-width: 91px;
    max-height: 91px;
    min-width: 91px;
    min-height: 91px;
      `)}

  ${DesktopSmall(css`
    max-width: 110px;
    max-height: 110px;
    min-width: 110px;
    min-height: 110px;
    line-height: var(--line-height-small);
    font-size: var(--font-size-medium);
  `)}
`
