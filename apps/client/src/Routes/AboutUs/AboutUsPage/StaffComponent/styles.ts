import styled, { css } from 'styled-components'
import { Mobile, MobileSmall, DesktopSmall, MobileLarge, } from 'Utils/breakpoints'


interface ImageCircleProps {
  image: string,
}

export const StaffGrid = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  padding: 0 0.8rem;
  
  justify-items: center;

  max-width: 90vw;
  min-width: 100%;

  color: var(--color-text-beige);

  ${MobileLarge(css`
    max-width: 90vw;
    min-height: 100vh;
    grid-row-gap: 2vh;
  `)}

  ${MobileSmall(css`
    /* grid-row-gap: 10vh; */
  `)}
`;

export const StaffHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  color: var(--color-text-white);

  margin: 3.2rem 0;

  .level-1 {
    color: var(--color-text-white);
    font-size: var(--font-size-title-xxlarge);
  }

  .level-3 {
    color: var(--color-text-white);
    font-size: var(--font-size-title-small);
  }

  ${Mobile(css`
    .level-3 {
      font-size: var(--font-size-default);
      text-align: center;
      max-width: 293px;
    }
  `)}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  max-height: 460px;
  max-width: 280px;
  min-width: 280px;
  min-height: 460px;
  align-items: center;
  background-color: var(--background-black);


  border: solid 2px #0C74FF;
  box-shadow: inset 2px -1px #FFEC99,2px 0px #FFEC99;
  border-radius: 14.3px;

  ${MobileSmall(css`
    max-width: 81%;
    max-height: 100%;
    min-width: 81%;
    min-height: 247px;
    `)}


  ${MobileLarge(css`
    max-height: 100%;
    max-width: 280px;
    min-width: 280px;
    min-height: 460px;
  `)}

  ${Mobile(css`
    max-width: 260px;
    max-height: 100%;
    min-width: 260px;
    min-height: 260px;
  `)}

  ${DesktopSmall(css`
    padding-left: calc((100% - 560px)/2)
  `)}
`

export const CardThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-width: 100%;
  min-height: 188px;
  
  position: relative;

  p {
    color: var(--color-text-pink);
    font-weight: 700;
    font-size: var(--font-size-medium);
    text-align: center;
    padding-top: 0.47rem;
  }


  img {
    width: 100%;
    max-width: 160px;
    clip-path: circle();
    z-index: 99999999999999;
    background-color: var(--background-yellow);

    margin-top: 1vh;
  }

  ${Mobile(css`
    max-height: 110px;
    max-width: 80%;
    min-height: 124px;


    p {
      font-size: var(--font-size-short);
      padding-top: 0.28rem;
    }

  `)}


  ${DesktopSmall(css`
      max-width: 75%;
      max-height: 130px;
  `)}

  ${MobileSmall(css`
    min-height: 130px;
    justify-content: flex-end;
  `)}
`;

export const CardBody = styled.div`
  max-width: 100%;

  p {
    color: var(--color-text-white);
    font-size: var(--font-size-medium);
    text-align: justify;
    line-height: var(--line-height-small);
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    padding-top: 1.2rem;
  }
  

  > p:first-child {
    color: var(--color-text-beige);
    font-weight: 600;
    font-size: var(--font-size-medium);
    text-transform: uppercase;
    padding-top: 0;
  }


  ${Mobile(css`
    line-height: 16px;
    padding-top: 1.2em;

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
    padding-top: 1.28em;

    p {
      font-size: var(--font-size-medium);
      padding-top: 0;
    }

    > p:first-child {
      padding-top: 5%;
    }
  `)}

    ${MobileLarge(css`
      font-size: var(--font-size-small);

      p {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.6rem;
      }

      > p:first-child {
        font-size: var(--font-size-small);
        padding-top: 0;
      }

      > p:last-child {
        padding-bottom: .5rem;
      }
    `)}

  ${MobileSmall(css`
    font-size: var(--font-size-small);

    p {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.6rem;
    }

    > p:first-child {
      font-size: var(--font-size-small);
      padding-top: 0;
    }
    > p:last-child {
        padding-bottom: .5rem;
      }
  `)}
`;

export const ImageCircle = styled.div<ImageCircleProps>`
  max-width: 126px;
  max-height: 126px;
  min-width: 126px;
  min-height: 126px;
  border-radius: 50%;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  z-index: 999;

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
  `)}

`

export const Circle = styled.div`
  max-width: 126px;
  max-height: 126px;
  min-width: 126px;
  min-height: 126px;
  border-radius: 50%;

  background-color: var(--background-pink);

  position: absolute;

  top: 10px;
  right: 83px;



  ${Mobile(css`
    max-width: 91px;
    max-height: 91px;
    min-width: 91px;
    min-height: 91px;    
    top: 7px;
    right: 90px;
  `)}

  ${DesktopSmall(css`
    max-width: 110px;
    max-height: 110px;
    min-width: 110px;
    min-height: 110px;
    top: 17px;
    right: 90px;
  `)}

  ${MobileSmall(css`
    top: 7px;
    right: 88px;
  `)}
`
