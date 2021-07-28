import styled, { css } from 'styled-components'

import { Title } from 'Components/Typography/Title'
import { DesktopSmall } from 'Utils/breakpoints'

interface StepProps {
  currentStep: number
}

interface ModalProps {
  isOpen: boolean
}

export const Container = styled.div`

  position: relative;

  background-color: black;
  padding-top: 5.83rem;

  ${DesktopSmall(css`
    padding-top: 3.91rem;
  `)}
`
export const FormTitle = styled(Title)`
  font-size: var(--font-size-title-xxxxlarge);
  color: #FC0061;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}
`

export const SessionContainer = styled.div`
  border-top: 2px solid #FC0061;
`

export const FormContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 3.83rem;
  
  position: relative;

  .form {
    border: 5px solid rgba(17, 16, 16, 0.5);
    box-shadow: 0px 0px 10px rgba(64, 64, 64, 0.6);
    border-radius: 7px;
  }

  ${DesktopSmall(css`
    margin-top: 3.35rem;
    margin-bottom: 2.54rem;
  `)}
`

export const NextButton = styled.button`
  border: 0;
  background-color: #FC0061;
  color: rgba(250, 250, 250, 0.7);;
  width: 9.7rem;
  height: 2.2rem;
  cursor: pointer;

  z-index: 2;
 
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
  background-color: #090909;
  color: rgba(250, 250, 250, 0.7);;
  cursor: pointer;
  font-size: var(--font-size-large);
  font-weight: 700;

  z-index: 2;

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
    row-gap: 1.25rem;

    margin-top: 1.36rem;    
  }

  .formSession {
    width: 3.33rem;
    height: 5.68rem;


    border-left: 5px solid rgba(17, 16, 16, 0.5);
    border-radius: 0px 7px 7px 0px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px 0px;

    label {
      color: rgba(255, 255, 255, 0.25);
      font-size: var(--font-size-title-medium);
      font-weight: 900;

      ${DesktopSmall(css`
        font-size: var(--font-size-subtitle);
      `)}
    }

    svg {
      display: none;
    }

    

    ${DesktopSmall(css`
      width: 2.23rem;
      height: 3.8rem;
    `)}

    &.checked {
      background-color: #2DAF2F;

      svg {
        display: block;
        width: 26.67px;
        height: 26.67px;
        color: #FAFAFA;
        cursor: pointer;

        ${DesktopSmall(css`
          width: 24px;
          height: 24px;
        `)}
      }

      label {
        color: #FAFAFA;
      }
    }

    background-color: #090909;

       
    &:nth-child(${({ currentStep }) => {

    switch (currentStep) {
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
      background-color: #FC0061;

      label {
        color: #FFEC99;
      }
    }
  }
`

export const ConfirmEmailModal = styled.div<ModalProps>`
  position: absolute;

  display: ${({isOpen}) => isOpen ? 'flex' : 'none' };

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90%;

  z-index: 10;

  background: rgba(196, 196, 196, 0.0);
  backdrop-filter: blur(1.5px);

  touch-action: none;

  .confirmEmailContainer {
    background-color: #202020;

    color: #fafafa;

    padding: 0 4.2rem;

    width: 36rem;
    height: 39.3rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    border: 5px solid rgba(40, 40, 40, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.8), inset 0px 0px 20px rgba(10, 10, 10, 0.8);
    border-radius: 10px;

    h1 {
      font-size: 26px;
      margin-bottom: 3.3rem;
    
    }
    
    h2 {
      font-size: 20px;
      margin-bottom: 3.3rem;
      line-height: 26px;
    }

    animation: fadeIn 0.4s;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform:  scale(0.5);
      }

      to {
        opacity: 1;
        transform:  scale(1);

      }
    }

    ${DesktopSmall(css`
      width: 28rem;
      height: 28rem;

      h1 {
        font-size: 18px;
        margin-bottom: 2rem;
      }
    
      h2 {
        font-size: 14px;
        margin-bottom: 2rem;
        line-height: 20px;
      }
    `)}
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 3.3rem;

    ${DesktopSmall(css`
      margin-bottom: 2rem;
    `)}
  }

  .socialMedias {
    margin-bottom: 3.3rem;
    display: flex;

    column-gap: 0.5rem;

    svg {
      width: 36px;
      height: 36px;
      color: #FC0061;
    }

    ${DesktopSmall(css`
      margin-bottom: 2rem;
    `)}
  }

  button {
    width: 21rem;
    height: 2.7rem;

    border: 0;
    background: #FC0061;
    box-shadow: inset 0px 0px 3px #000000;
    border-radius: 2px;

    cursor: pointer;

    color: #FFEC99;

    ${DesktopSmall(css`
      width: 18rem;
      height: 2.7rem;
    `)}
  }
`
