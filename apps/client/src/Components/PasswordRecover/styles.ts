import styled, { css } from 'styled-components'

import { MobileSmall, Mobile, DesktopSmall, DesktopLarge } from "Utils/breakpoints"

interface ModalProps {
  isVisible: boolean
}

export const Wrapper = styled.div<ModalProps>`
  max-width: 640px;
  max-height: 707px;
  min-height: 45vh;
  min-width: 40vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form {
    min-height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  p:nth-child(3) {
    margin-top: 2rem;
    align-self: center;
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }

  a {
    text-align: center;
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
    max-width: 99vw;
    max-height: 99vh;
    min-height: 99vh;
    min-width: 99vw;
    border: none;

    form {
      margin-top: 0;
    }
  `)}
`;


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 136px;


  input {
    min-width: 379px;
    min-height: 51px;
    margin-bottom: 0.9rem;
    color: black;
  }

  label {
    margin-bottom: 2rem;
    font-size: var(--font-size-large);
  }

  p {
    max-width: 379px;
    text-align: center;
    margin-bottom: 9.7rem;
  }

  > div {
    color: red;
    font-weight: 600;
    font-size: var(--font-size-short);
  }

  ${MobileSmall(css`
    align-items: center;

    input {
      min-width: 305px;
      max-width: 305px;
      min-height: 51px;
      margin-bottom: 0.9rem;
      color: black;
    }

    p {
      font-size: var(--font-size-short);
      max-width: 231px;
    }
  `)}
`
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
  background-color: white;
  min-height: 707px;
  min-width: 640px;
  max-width: 640px;

  position: absolute;

  background: rgba(229, 229, 229, 1);

  align-items: center;
  justify-content: center;

  text-align: justify;

  h3 {
    margin-top: 3.15em;
  }

  > p {
    text-align: center;
    max-width: 488px;
    font-size: var(--font-size-title-short);
  }

  p:first-child {
    display: none;
  }

  p:nth-child(2) {
    margin-top: 3em;
    margin-bottom: 3em;
  }


  p:nth-child(3) {
    font-weight: 700;
    margin-bottom: 1em;
  }
  
  p:nth-child(4) {
    font-weight: 700;
  }

  button {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
  z-index: 999999999;

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

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    button {
      margin-top: 2.7rem;
      margin-bottom: 1rem;
      max-width: 80%;
      min-width: 70%;
    }

    div {
      margin-top: 1em;
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

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    button {
      margin-top: 2.7rem;
      margin-bottom: 1rem;
      max-width: 80%;
      min-width: 70%;
    }

    div {
      margin-top: 1em;
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

    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    button {
      margin-top: 2.7rem;
      margin-bottom: 1rem;
      max-width: 80%;
      min-width: 70%;
    }

    div {
      margin-top: 1em;
    }
  `)}

  ${DesktopLarge(css`
    min-height: 650px;
    max-height: 650px;
    min-width: 500px;
    max-width: 500px;

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


    button {
      margin-top: 2.7rem;
      margin-bottom: 1rem;
      max-width: 80%;
      min-width: 70%;
    }

    div {
      margin-top: 1em;
    }

  `)}

`

export const Container = styled.div<ModalProps>`
  display: ${props => props.isVisible ? "grid" : "none"};
  position: fixed;
  top: 7vh;
  left: 0;
  min-width: 100vw;
  min-height: 85vh;
  place-items: center;
  z-index: 99999999;
  max-height: 85vh;

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
