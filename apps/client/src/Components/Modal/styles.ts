import styled, { css } from "styled-components"
import { MobileSmall, Mobile, DesktopSmall, DesktopLarge } from "Utils/breakpoints"


interface ModalProps {
  isVisible: boolean
}

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  max-height: 707px;
  height: 75vh;
  width: 40vw;
  max-width: 640px;
  border: 5px solid rgba(40,40,40,0.5);
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(10,10,10,0.8),
    inset 0px 0px 20px rgba(10, 10, 10, 0.8);

  backdrop-filter: blur(15px);

  position: absolute;

  align-items: center;
  justify-content: center;

  h3 {
    color: white;
    font-size: var(--font-size-title-xlarge);
    max-width: 90%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }


  ${MobileSmall(css`
    min-height: 530px;
    max-height: 530px;
    min-width: 400px;
    max-width: 100vw;

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
    min-width: 400px;
    max-width: 100%;

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
  height: inherit;

  background: linear-gradient(180deg, #202020 0%, rgba(32, 32, 32, 0.7) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -5px 14px rgba(22, 22, 22, 0.8);
  border-radius: 5px;



  h3 {
    color: white;
  }

  p {
    text-align: center;
    max-width: 488px;
    font-size: var(--font-size-title-short);
    line-height: 26px;
    color: white;
  }

  p:nth-child(2) {
  }

  p:nth-child(3) {
    font-weight: 700;
  }
  

  > button {
    margin: 0;
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

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 400px;

    align-items: center;

    input {
      margin-bottom: 1rem;
    }
  }

  ${MobileSmall(css`


    p {
      font-size: var(--font-size-short);
      max-width: 80%;
    }


    button {
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
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(15px);

`


export const Button = styled.button`
  max-width: 150px;
  max-height: 45px;
  min-width: 120px;
  min-height: 30px;
  box-shadow: 3px 3px 0px -1px yellow;

  color: var(--color-text-yellow);
  font-weight: bold;

  border: none;
  background-color: rgba(252, 0, 97, 1);

  cursor: pointer;
`
