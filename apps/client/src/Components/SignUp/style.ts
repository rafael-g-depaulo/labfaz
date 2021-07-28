import styled, { css } from 'styled-components'

import { Title } from 'Components/Typography/Title'
import { DesktopSmall } from 'Utils/breakpoints'

interface StepProps {
  currentStep: number
}

export const Container = styled.div`
`
export const FormTitle = styled(Title)`
  font-size: var(--font-size-title-xxxxlarge);

  ${DesktopSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}
`

export const SessionContainer = styled.div``

export const FormContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 3.83rem;
  
  position: relative;

  ${DesktopSmall(css`
    margin-top: 3.35rem;
    margin-bottom: 2.54rem;
  `)}
`

export const NextButton = styled.button`
  border: 0;
  background-color: #FFFFFF;
  color: #000000;
  width: 9.7rem;
  height: 2.2rem;
  cursor: pointer;
 
  font-size: var(--font-size-large);
  font-weight: 700;

  position: absolute;

  right: 6rem;
  bottom: 2.2rem;

  ${DesktopSmall(css`
    width: 6.5rem;
    height: 1.48rem;

    font-size: var(--font-size-short);
    
    right: 4rem;
  `)}
`
export const BackButton = styled.button`

  width: 9.7rem;
  height: 2.2rem;
  border: 0;
  background-color: #FFFFFF;
  color: #000000;
  cursor: pointer;
  font-size: var(--font-size-large);
  font-weight: 700;

  position: absolute;

  left: 2.6rem;
  bottom: 2.2rem;


  ${DesktopSmall(css`
    width: 6.5rem;
    height: 1.48rem;
  
    left: 1.78rem;


    font-size: var(--font-size-short);
  `)}

`
export const RightSession = styled.div<StepProps>`
  display: flex;

  .sessionContainer {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    margin-top: 1.36rem;
  }

  .formSession {
    width: 3.33rem;
    height: 5.68rem;

    ${DesktopSmall(css`
      width: 2.23rem;
      height: 3.8rem;
    `)}

    background-color: #CECECE;
       
    &:nth-child(${({ currentStep }) => {
    
      switch ( currentStep ) {
        case 0:
          return 1

        case 1:
          return 2

        case 2:
          return 3

        case 3: case 4: case 5:
          return 4

        case 6: case 7:
          return 5

        case 8: case 9:
          return 6

        default:
          return ''
      }

    }}) {
      background-color: #6C6C6C;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
