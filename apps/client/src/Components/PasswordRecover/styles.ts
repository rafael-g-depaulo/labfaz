import styled, { css } from 'styled-components'

import { MobileSmall, Mobile, DesktopSmall, DesktopLarge } from "Utils/breakpoints"
import { Text } from "Components/Typography/Text"

interface ModalProps {
  isVisible: boolean
}

interface MessageProps {
  isError?: boolean
}

export const Wrapper = styled.div<ModalProps>`
  max-width: 640px;
  max-height: 707px;
  min-height: 45vh;
  min-width: 50%;
  background-color: #111010;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form {
    min-height: 50%;
    max-width: 75%;
    min-width: 75%;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  >:nth-child(2) {
    margin-top: 2rem;
    align-self: center;
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    color: white;
  }

  ${MobileSmall(css`
    max-width: 99vw;
    max-height: 99vh;
    min-height: 99vh;
    min-width: 99vw;
    border: none;

    form {
      margin-top: 0;
    }
  `)}

  ${Mobile(css`
    max-width: 99vw;
    max-height: 99vh;
    min-height: 99vh;
    min-width: 99vw;
    border: none;

    form {
      margin-top: 0;
    }
  `)}

  ${DesktopSmall(css`
    min-width: 100%;
    max-width: 305px;
    max-height: 406px;
    min-height: 100%;
    
    form {
      margin-top: 0;
    }
  `)}
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0.5rem 2rem;
  text-decoration: none;
  font-weight: bold;

  color: var(--color-text-yellow);
  background-color: var(--button-color-pink);

  border-top: 2px solid;
  border-left: 2px solid;
  border-color: var(--button-color-yellow);

  :disabled {
    opacity: 0.5;
  }

  ${MobileSmall(css`
    align-self: center;

    min-width: 305px;
    max-width: 305px;
    min-height: 38px;
  `)}
`


export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  max-height: 707px;
  height: 80vh;
  min-width: 640px;
  max-width: 640px;
  border: 5px solid rgba(40,40,40,0.5);
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(10,10,10,0.8),
    inset 0px 0px 20px rgba(10, 10, 10, 0.8);

  backdrop-filter: blur(15px);

  position: absolute;

  align-items: center;
  justify-content: center;

  text-align: justify;

  h3 {
    margin-top: 1em;
    margin-bottom: 1rem;
    color: white;
    font-size: var(--font-size-title-xlarge);
    max-width: 80%;
  }


  ${MobileSmall(css`
    min-height: 530px;
    max-height: 530px;
    min-width: 303px;
    max-width: 303px;

    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }
  `)}

  ${Mobile(css`
    min-height: 600px;
    max-height: 600px;
    min-width: 350px;
    max-width: 350px;

    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }
  `)}

  ${DesktopSmall(css`
    min-height: 600px;
    max-height: 600px;
    min-width: 400px;
    max-width: 400px;

    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }
  `)}
`

export const ModalLine = styled.div`
  min-height: 2px;
  min-width: 80%;
  box-shadow: 0px 3px 5px #0B0B0B;
  margin-bottom: 2.3rem;
  background: linear-gradient(to right, rgba(40, 40, 40, 0.1), rgba(40, 40, 40, 1), rgba(40, 40, 40, 0.1) );
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 90%;
  max-width: 98%;
  max-height: 525px;
  height: 70%;

  background: linear-gradient(180deg, #202020 0%, rgba(32, 32, 32, 0.7) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -5px 14px rgba(22, 22, 22, 0.8);
  border-radius: 5px;



  h3 {
    margin-top: 1.5em;
    color: white;
  }

  p {
    text-align: center;
    max-width: 488px;
    font-size: var(--font-size-title-short);
    line-height: 26px;
    color: white;
    margin-top: 2rem;
  }

  p:nth-child(2) {
    margin-top: 2rem;
  }

  p:nth-child(3) {
    font-weight: 700;
    margin-top: 1.5rem;
  }
  

  button {
    margin-top: 1rem;
    margin-bottom: 3rem;
    max-width: 60%;
    min-width: 60%;
  }
  z-index: 999999999;

  div:nth-child(4) {
    margin: 0;

    p {
      display: none;
    }

    a {
     * {
        color: white;
        max-width: 30px;
      }
    }
  }

  ${MobileSmall(css`


    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    button {
      margin-top: 1rem;
      margin-bottom: 3rem;
      max-width: 80%;
      min-width: 70%;
    }

    div {
      margin-top: 1em;
    }
  `)}

  ${Mobile(css`
    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }

    div {
      margin-top: 1em;
    }
  `)}

  ${DesktopSmall(css`
    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    div {
      margin-top: 1em;
    }
  `)}

  ${DesktopLarge(css`
    h3 {
      font-size: var(--font-size-title-smaller);
      max-width: 80%;
      text-align: center;
      padding-top: 1em;
      margin-top: 0;
    }

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }

    div {
      margin-top: 1em;
    }

  `)}

`


export const Container = styled.div<ModalProps>`
  display: ${props => props.isVisible ? "grid" : "none"};
  position: fixed;
  top: 10vh;
  left: 0;
  min-width: 100vw;
  min-height: 90vh;
  place-items: center;
  z-index: 99999999;
  max-height: 85vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
`


export const Button = styled.button`
  min-width: 379px;
  max-height: 48px;
  min-height: 48px;
  text-align: center;
  align-items: center;
  border: none;
  background-color: white;
`
export const Span = styled.p`
  margin-top: 1rem;
  text-decoration: underline;
  align-self: center;

  :hover {
    cursor: pointer;
  }
` 

export const Message = styled(Text)<MessageProps>`
  color: ${props => props.isError ? "red" : ""};
  font-size: var(--font-size-medium);
  text-decoration: none;
  font-weight: 600;
  padding: 5em 0;
`
