import styled, { css } from "styled-components";
import { DesktopSmall, Mobile } from "Utils/breakpoints";
import { ExternalLinkButton } from "Components/Buttons/ExternalLinkButton";

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
`;

export const LinkModal = styled.div<ModalProps>`
  position: absolute;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  align-items: center;
  justify-content: center;

  width: 40%;
  height: 80%;

  z-index: 10;

  background: rgba(196, 196, 196, 0);

  touch-action: none;

  ${DesktopSmall(css`
    width: 50%;
    height: 50%;
  `)}

  ${Mobile(css`
    width: 80%;
    height: 70%;
  `)}

  .confirmEmailContainer {
    background-color: rgb(17, 16, 16);

    color: #fafafa;

    padding: 0 8px 8px 8px;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    border: 5px solid rgba(40, 40, 40, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.8),
      inset 0px 0px 20px rgba(10, 10, 10, 0.8);
    border-radius: 10px;

    h1 {
      font-size: 30px;
      margin: 40px 0 30px 0;
      text-transform: uppercase;
    }

    animation: fadeIn 0.4s;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.5);
      }

      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    ${DesktopSmall(css`
      h1 {
        font-size: 18px;
        margin-bottom: 2rem;
      }
    `)}

    ${Mobile(css`
      h1 {
        font-size: 18px;
        margin-bottom: 30px;
      }
    `)}
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #202020;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    padding-top: 40px;

    p {
      font-size: 16px;
      color: #fafafa;
      margin: 0px;
      font-weight: 600;
      text-align: center;
    }

    ${DesktopSmall(css`
      margin-bottom: 2rem;

      p {
        font-size: 14px;
      }
    `)}

    ${Mobile(css`
      padding-top: 30px;
      p {
        font-size: 14px;
        padding: 0 8px;
      }
    `)}
  }

  button {
    width: 18rem;
    height: 2.7rem;

    border: 0;
    background-color: rgba(252, 0, 97, 0.2);
    box-shadow: inset 0px 0px 3px #000000;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: bold;

    cursor: pointer;

    color: #fafafa;

    :last-child {
      margin-bottom: 40px;
      background-color: transparent;
      box-shadow: none;
    }

    ${DesktopSmall(css`
      width: 16rem;
      height: 2.7rem;
      font-size: 14px;
    `)}

    ${Mobile(css`
      width: 12rem;
      height: 2.4rem;
      font-size: 14px;

      :last-child {
        margin-bottom: 30px;
      }
    `)}
  }
`;

export const Button = styled(ExternalLinkButton)`
  width: 18rem;
  height: 2.7rem;

  border: 0;
  background: #fc0061;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  cursor: pointer;

  color: #fafafa;

  ${DesktopSmall(css`
    width: 16rem;
    height: 2.7rem;
    font-size: 14px;
  `)}

  ${Mobile(css`
    width: 12rem;
    height: 2.4rem;
    font-size: 14px;
  `)}
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
