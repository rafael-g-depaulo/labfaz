import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Title } from 'Components/Typography/Title'
import { DesktopSmall, Mobile } from 'Utils/breakpoints'
import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton'
import { TextInput } from 'Components/Input/TextInput'
import { PasswordInput } from 'Components/Input/PasswordInput'

interface ContainerProps {
  openToastMessage: boolean
}

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;

  overflow-x: hidden; 
`

export const LoginTitle = styled(Title)`
  color: #FC0061;

  font-size: var(--font-size-title-xxxlarge);

  border-bottom: 2px solid #FC0061;

  margin-top: 3.5rem;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}

  ${Mobile(css`
    margin-top: 2.1rem;
    border-bottom: none;
    font-size: var(--font-size-title-xlarge);
    line-height: 40px;
  `)}
`

export const LabfazText = styled(Title)`
  color: #FC0061;

  font-size: var(--font-size-title-small);

  text-align: center;

  margin-top: 4.7rem;
  margin-bottom: 8.1rem;

  ${DesktopSmall(css`
    font-size: var(--font-size-subtitle);
  `)}

  ${Mobile(css`
    display: none;
  `)}
`

export const FormContainer = styled.div<ContainerProps>`
  .errorMessage {
    position: absolute;

    white-space: nowrap;

    color: #FFEC99;
    padding: 0.2rem 0rem 0.2rem 0.5rem;

    border-radius: 5px;

    top: 3.5rem;
    right: 1.5rem;

    animation: toast 1s forwards;

    background-color: #FC0061;

    display: ${({ openToastMessage }) => openToastMessage ? 'block' : 'none'};
  
    ${Mobile(css`
      top: 5.5rem;
      right: 1rem;
    `)}

    button {
      background-color: inherit;
      outline: none;
      border: 0;
      margin: 0.2rem;

      height: 100%;

      &:hover {
        cursor: pointer;
      }
    }

    ${DesktopSmall(css`

      padding: 0rem 0.5rem;
  
      span {
        font-size: var(--font-size-medium);
      }
    `)}

    ${Mobile(css`

      padding: 0.2rem 0rem 0.2rem 0.5rem;
      
      span {
        font-size: var(--font-size-short);
      }

      button {
        font-size: var(--font-size-medium);
      }
    `)}
  }

  
  @keyframes toast {
    0% {
      transform: translateX(100%);
    }

    40% {
      transform: translateX(-10%);
    }

    80% {
      transform: translateX(5%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  .formContainer {
    max-width: 71.6rem;
    width: 95vw;
    height: 40.5rem;

    display: flex;
    position: relative;

    margin-top: 2rem;
    
    border: 5px solid rgba(17, 16, 16, 0.5);
    box-shadow: 0px 0px 10px rgba(64, 64, 64, 0.6);
    border-radius: 7px;

    ${DesktopSmall(css`
      max-width: 47.6rem;
      width: 90vw;
      height: 23.5rem;
    `)}

    ${Mobile(css`
      width: 100%;
      height: 23.5rem;
      margin-bottom: 9.2rem;
      margin-top: 4.4rem;

      border: 0;
      box-shadow: 0px 0px 0px rgba(64, 64, 64, 0.6);
      border-radius: 0px;
    `)}
  }
`

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  background-color: #CECECE;
  
  display: flex;
  align-items: center;
  justify-content: center;

  ${DesktopSmall(css`
    width: 100%;
    height: 100%;
  `)}

  ${Mobile(css`
    display: none;
  `)}

  img {
    object-fit: cover;
    /* width: 100%;
    height: 100%; */
  }
`

export const RightSide = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: #111010;

  ${Mobile(css`
    background-color: black;
  `)}
`
export const Button = styled.button`
  border: 0;
  background-color: #FC0061;
  color: #FFEC99;
  padding: 0.25rem 0;
  cursor: pointer;

  font-size: var(--font-size-large);
  font-weight: 700;

  ${DesktopSmall(css`

    font-size: 10px;

    padding: 0.25rem 6rem;

    white-space: nowrap;
  `)}
`

export const RegisterButton = styled(InternalLinkButton)`
  padding: 0.25rem 7.8rem;

  font-size: 16px;

  white-space: nowrap;

  ${DesktopSmall(css`

    font-size: 10px;

    padding: 0.25rem 5rem;

    white-space: nowrap;
  `)}

  ${Mobile(css`
    font-size: 13px;
    padding: 0.25rem 4rem;
  `)}  
`

export const InputTextContainer = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;

  row-gap: 6.5rem;

  ${DesktopSmall(css`
    row-gap: 2rem;
  `)}

  ${Mobile(css`
    margin-top: 4.3rem;
    width: 13.16rem;
    row-gap: 3.5rem;
  `)}  
`

export const InputText = styled(TextInput)`

  position: relative;

  margin: 0;

  input {
    width: 100%;

    ${Mobile(css`
      width: 100%;
    `)}     
  }
`

export const InputPassword = styled(PasswordInput)`
  input {
    width: 100%;

    ${Mobile(css`
      width: 100%;
    `)} 
  }
`

export const Form = styled.form``

export const NavLink = styled(Link)`
  font-size: var(--font-size-short);
  font-weight: 600;

  color: #FAFAFA;

  display: flex;
  justify-content: center;

  margin-top: 2.2rem;

  ${DesktopSmall(css`
    margin-top: 1.24rem;
  `)}
`

export const ButtonContainer = styled.div`
  display: flex;

  flex-direction: column;

  row-gap: 1.2rem;

  ${DesktopSmall(css`
    width: 14rem;
  `)}

  ${Mobile(css`
    width: 13.2rem;
  `)}  
`
export const CheckboxInputContainer = styled.div`
  margin-top: 3.33rem;
  margin-bottom: 3.7rem;

  label {
    font-size: var(--font-size-medium);
  }

  ${DesktopSmall(css`
    margin-top: 1.47rem;
    margin-bottom: 2rem;
  `)}

  ${Mobile(css`
    margin-top: 3.5rem;
    margin-bottom: 2.9rem;
  `)}

  div .checkbox_input {
    
    ${Mobile(css`
      width: 22px;
      height: 20px;
    `)}
  }
`
