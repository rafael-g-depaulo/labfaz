import styled from 'styled-components'


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  max-height: 362px;
  max-width: 229px;
  min-width: 229px;
  min-height: 362px;
  font-size: var(--font-size-medium);

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

  img {
    width: 100%;
    clip-path: circle();
    margin-bottom: 1.2em;
  }
`;

export const CardBody = styled.div`
  max-height: 130px;
  max-width: 190px;
`;

export const CardImage = styled.img`

`;
