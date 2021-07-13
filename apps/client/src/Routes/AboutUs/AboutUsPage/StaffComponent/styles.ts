import styled, { css } from 'styled-components'
import { Mobile, MobileSmall, DesktopSmall, MobileLarge, DesktopLarge } from 'Utils/breakpoints'


interface CircleProps {
  color?: string
}


export const StaffGrid = styled.div`
  display: grid;
  grid-gap: 7vw;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  
  align-items: center;
  align-self: center;
  justify-content: center;

  max-width: 85vw;

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

  .level-1 {
    color: var(--color-text-beige);
  }

  .level-3 {
    color: var(--color-text-beige);
  }

  ${Mobile(css`
    .level-3 {
      font-size: var(--font-size-default);
      text-align: center;
      max-width: 293px;
    }
  `)}
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
  background-color: var(--background-black);


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

  padding-top: 2em;
  
  position: relative;

  p {
    color: var(--color-text-pink);
    font-weight: 700;
    font-size: var(--font-size-large);
    text-align: center;
    padding-top: 3%;
  }

  .pink {
    top: 11px;
    right: 19px;
    background-color: var(--background-pink);
  }

  .yellow {
    top: 13px;
    right: 13px;
    z-index: 999;
    background-color: var(--background-yellow);
  }

  ${Mobile(css`
    max-height: 100px;
    max-width: 80%;

    p{
      font-size: var(--font-size-short);
    }
  `)}

  ${DesktopSmall(css`
      max-width: 75%;
      max-height: 130px;
  `)}

  ${DesktopLarge(css`
    .pink {
      top: 16px;
      right: 19px;
      background-color: var(--background-pink);
    }

    .yellow {
      top: 18px;
      right: 13px;
      z-index: 999;
      background-color: var(--background-yellow);
    }
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
  
  p {
    color: var(--color-text-white);
    font-size: var(--font-size-medium);
    text-align: justify;
    line-height: var(--line-height-small);
    padding-top: 10%;
  }
  

  > p:first-child {
    color: var(--color-text-beige);
    font-weight: 600;
    font-size: var(--font-size-medium);
    padding-top: 10%;
  }


  ${Mobile(css`
    line-height: 16px;
    padding-top: 1.3em;

    p {
      font-size: var(--font-size-short);
      line-height: 16px;
      padding-top: 2.5%;
    }

    > p:first-child {
      padding-top: 2.5%;
      font-size: var(--font-size-short);
    }
    
  `)}

  ${DesktopSmall(css`
    max-height: 130px;
    line-height: var(--line-height-small);
    font-size: var(--font-size-medium);
    padding-top: 1.3em;

    p {
      font-size: var(--font-size-short);
      padding-top: 0;
    }

    > p:first-child {
      padding-top: 5%;
    }
  `)}
`;


export const Circle = styled.div<CircleProps>`
  max-width: 126px;
  max-height: 126px;
  min-width: 126px;
  min-height: 126px;
  border-radius: 50%;


  position: absolute;


    .yellow {
      top: 13px;
      right: 19px;
    }

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
