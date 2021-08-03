import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`

export const Color = css`
  animation: colors 2s infinite;
  @keyframes colors {
    25% {
      background-color: #FC0061;
      transform: rotateX(180deg) rotateY(0);
    }
    50% {
      background-color: #2DAF2F;
      transform: rotateX(180deg) rotateY(180deg);
    }
    75% {
      background-color: #0C74FF;
      transform: rotateX(0) rotateY(180deg);
    }
    100% {
      background-color: #F6DA37;
      transform: rotateX(0) rotateY(0);
    }
  }
`
