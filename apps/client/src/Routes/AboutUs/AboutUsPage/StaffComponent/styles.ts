import styled, { css } from 'styled-components'
import { Paragraph } from 'Components/Text/style'
import { Mobile } from 'Utils/breakpoints'


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  max-height: 362px;
  max-width: 229px;
  min-width: 229px;
  min-height: 362px;
  font-size: var(--font-size-medium);
  font-family: var(--card-font-family);
  flex-direction: column;
  align-items: center;


  border: solid 1.9px black;
  border-radius: 14.3px;
`

export const CardThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 160px;
  max-width: 160px;

  margin-top: 1em;

  font-weight: 700;
  font-family: var(--card-font-family) ;

  img {
    width: 100%;
    clip-path: circle();
  }
`;

export const CardBody = styled.div`
  max-height: 130px;
  max-width: 190px;
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

export const Span = styled.span`
  font-size: var(--font-size-short);
  font-weight: 600;
  margin-bottom: 22px;
`
