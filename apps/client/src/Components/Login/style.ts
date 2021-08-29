import styled, { css } from 'styled-components'

import { Title } from 'Components/Typography/Title'
import { Input } from 'Components/Input'
import { Link } from 'react-router-dom'
import { DesktopSmall, Mobile } from 'Utils/breakpoints'
import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton'

interface ContainerProps {
  openToastMessage: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  .errorMessage {
    position: absolute;

    color: #FFEC99;
    padding: 0.2rem 0rem 0.2rem 0.5rem;

    border-radius: 5px;

    top: 0;
    right: 0;

    animation: toast 1s forwards;

    background-color: #FC0061;

    display: ${({openToastMessage}) => openToastMessage ? 'block' : 'none'};
  
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
      transform: translateX(0%);
    }

    40% {
      transform: translateX(-10%);
    }

    80% {
      transform: translateX(10%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`

export const LoginTitle = styled(Title)`
  color: #FC0061;

  font-size: var(--font-size-title-xxxlarge);

  border-bottom: 2px solid #FC0061;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}

  ${Mobile(css`
    display: none;
  `)}
`

export const LabfazText = styled(Title)`
  color: #FC0061;

  font-size: var(--font-size-title-small);

  text-align: center;

  margin-top: 4.7rem;
  margin-bottom: 8.1rem;

  ${Mobile(css`
    display: none;
  `)}
`

export const FormContainer = styled.div`
  width: 71.6rem;
  height: 40.5rem;

  display: flex;
  position: relative;

  margin-top: 2rem;
  
  border: 5px solid rgba(17, 16, 16, 0.5);
  box-shadow: 0px 0px 10px rgba(64, 64, 64, 0.6);
  border-radius: 7px;

  ${DesktopSmall(css`
    width: 47.6rem;
    height: 23.5rem;
  `)}

  ${Mobile(css`
    width: 100vw;
    margin-bottom: 9.2rem;

    border: 0;
    box-shadow: 0px 0px 0px rgba(64, 64, 64, 0.6);
    border-radius: 0px;
  `)}
`

export const LeftSide = styled.div`
  width: 35.5rem;
  height: 40rem;
  background-color: #CECECE;
  
  display: flex;
  align-items: center;
  justify-content: center;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 23.5rem;
  `)}

  ${Mobile(css`
    display: none;
  `)}
`

export const RightSide = styled.div`
  width: 35.5rem;
  height: 40rem;
  background-color: #111010;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 23.5rem;
  `)}

  ${Mobile(css`
    width: 100vw;
  `)}

  display: flex;
  align-items: center;
  justify-content: center;


  .checkboxContainer {

    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    input {
      margin-right: 1.2rem;
    }
  }
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

  flex-direction: column;

  row-gap: 6.5rem;

  ${DesktopSmall(css`
    row-gap: 2rem;
  `)}

  ${Mobile(css`
    align-items: center;
    row-gap: 2.5rem;
  `)}  
`

export const InputText = styled(Input)`

  position: relative;

  margin: 0;

  input[type="text"], input[type="password"] {
    width: 21.7rem;
    height: 2.4rem;
    font-size: var(--font-size-medium);
    padding-left: 2.1rem;
    font-weight: 600;

    color: #fafafa;

    background-color: #090909;
    border: 1px solid rgba(250, 250, 250, 0.7);;
    box-shadow: 0px 0px 10px rgba(64, 64, 64, 0.6);
    border-radius: 1px;
    
    &::placeholder {
      font-size: var(--font-size-medium);

      color: rgba(255, 255, 255, 0.25);
    }

    ${DesktopSmall(css`
      width: 14rem;
      height: 1.7rem;
      padding-left: 1.2rem;   

    `)}

    ${Mobile(css`
      width: 13.2rem;
      padding-left: 1.2rem;   
    `)}   
  }

  label {
    font-size: var(--font-size-medium);
    color: #fafafa;

    position: absolute;

    top: -1rem;
    left: 1.2rem;

    padding: 0 0.5rem;

    background-color: #111010;
  }
`


export const InputCheckBox = styled(Input)`
  display: flex;
  flex-direction: row;

  margin-top: 3.33rem;
  margin-bottom: 3.7rem;

  input[type="checkbox"] {
    margin-right: 1.2rem;
  }

  label {
    font-size: 14px;
    color: #FAFAFA;
  }

  ${DesktopSmall(css`
    margin-top: 1.47rem;
    margin-bottom: 1rem;

  `)}
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
