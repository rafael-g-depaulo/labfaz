import styled from 'styled-components'

import Header from 'Components/Header'
import { Title } from 'Components/Typography/Title'
import { Text } from 'Components/Typography/Text'

interface StepProps {
  currentStep: number
}

interface ModalProps {
  isOpen: boolean
}

export const Container = styled.div`

  background-color: black;
  padding-top: 5.83rem;
`

export const SessionContainer = styled.div``

export const FormContainer = styled.div<StepProps>`
  display: flex;

  justify-content: space-between;

  position: relative;

  .form {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 88vw;
  }
`

export const NextButton = styled.button`
  border: 0;
  background-color: #FC0061;
  color: rgba(250, 250, 250, 0.7);;
  width: 6.5rem;
  height: 2.2rem;
  cursor: pointer;
 
  font-size: var(--font-size-large);
  font-weight: 700;
`
export const BackButton = styled.button`

  width: 6.5rem;
  height: 2.2rem;
  border: 0;
  background-color: #FC0061;
  color: rgba(250, 250, 250, 0.7);;
  cursor: pointer;
  font-size: var(--font-size-large);
  font-weight: 700;
`
export const RightSession = styled.div<StepProps>`

  background-color: #111010;

  .sessionContainer {
    display: flex;
    flex-direction: column;
  }

  .formSession {
    width: 1.98rem;
    height: calc(100vh/16);
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px 0px;
  
    &.checked {
      background-color: #2DAF2F;

      label {
        color: #FAFAFA;
      }
    }

    background-color: #111010;

       
    &:nth-child(${({currentStep}) => currentStep }) {
      background-color: #2DAF2F;
      border-radius: ${({currentStep}) => currentStep === 15 ? '0px 0px 0px 0px' : '0px 0px 50px 50px'};

      label {
        color: #FAFAFA;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export const ButtonContainer = styled.div<StepProps>`
  display: ${({currentStep}) => currentStep === 15 ? 'none' : 'flex'};

  position: absolute;

  column-gap: 2.1rem;

  bottom: 1.8rem;

  left: 50%;
  transform: translateX(-50%);
`

export const FormHeader = styled(Header)`
  position: fixed;
`

export const FormTitle = styled(Title)`
  font-size: var(--font-size-title-xlarge);
  color: #FFFFFF;

  margin-left: 1.7rem;
`
export const SignUpText = styled(Text)`
  color: #fff;
  font-size: var(--font-size-large);


  display: block;
  width: 16.5rem;
  margin-left: 1.7rem;
  margin-top: 2.6rem;
  margin-bottom: 5.83rem;
`

export const ConfirmEmailModal = styled.div<ModalProps>`
  position: absolute;

  display: ${({isOpen}) => isOpen ? 'flex' : 'none' };

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  z-index: 10;

  background: rgba(196, 196, 196, 0.0);
  backdrop-filter: blur(1.5px);

  touch-action: none;

  .confirmEmailContainer {
    background-color: #202020;

    color: #fafafa;

    width: 15rem;
    height: 30rem;

    padding: 0 2rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;


    h1 {
      font-size: 18px;
      margin-bottom: 2rem;
      line-height: 20px;
    
    }
    
    h2 {
      font-size: 14px;
      margin-bottom: 2rem;
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
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;

    label {
      font-size: 14px;
    }
  }

  .socialMedias {
    margin-bottom: 2rem;
    display: flex;

    column-gap: 0.5rem;

    svg {
      width: 30px;
      height: 30px;
      color: #FC0061;
    }
  }

  button {
    width: 12rem;
    height: 2rem;

    border: 0;
    background: #FC0061;
    box-shadow: inset 0px 0px 3px #000000;
    border-radius: 2px;

    cursor: pointer;

    font-size: 13px;

    color: #FFEC99;
  }
`
