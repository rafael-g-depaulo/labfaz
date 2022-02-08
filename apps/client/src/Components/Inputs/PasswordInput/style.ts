import styled, { css } from "styled-components"
import { DesktopSmall, Mobile } from "Utils/breakpoints"

interface ContainerProps {
  validationError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  position: relative;

  .labelContainer {
    position: absolute;
    left: 1.27rem;
    top: -60%;

    height: 1.66rem;

    padding: 0px 9px;

    z-index: 2;

    background-color: #111010;
    
    ${DesktopSmall(css`
      padding: 0px 9px;
      left: 0.8rem;
      top: -60%;
      height: 1.5rem;
    `)}

    ${Mobile(css`
      padding: 0.1px 9px;
      left: 0.4rem;
      top: -60%;
      background-color: #000000;

    `)}
  }

  .labelContent {
    position: relative;
    display: inline-flex;
    flex-direction: column;

    column-gap: 0.5rem;
    position: relative;

    height: fit-content;

    span {
      
      display: inline;

      position: absolute;

      width: 13rem;

      bottom: -30%;

      font-size: 10px;

      font-weight: 400;

      color: red;

      z-index: 1;

      ${DesktopSmall(css`
        bottom: -50%;
        font-size: 8px;
      `)}

      ${Mobile(css`
        bottom: -40%;
        white-space: nowrap;
        width: 5.5rem;
      `)}
    }
  }

  label {
    font-weight: 600;
    font-size: var(--font-size-large);
    color: var(--color-text-black);
    /* margin-bottom: -0.5rem; */

    color: #fafafa;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}

    ${Mobile(css`
      font-size: var(--font-size-large);
    `)}

    .obrigatory {
      display: inline;
      color: red;
      
      font-size: var(--font-size-default);
    
      ${DesktopSmall(css`
        font-size: var(--font-size-short);
      `)}
    }
  }

  input {
    width: 12.4rem;
    height: 2.55rem;

    font-size: var(--font-size-medium);
    
    background-color: #090909;
    color: rgba(255, 255, 255, 0.25);
    border: ${({validationError}) => validationError ? '1px solid red' : '1px solid rgba(250, 250, 250, 0.7)' };


    ${DesktopSmall(css`
      width: 14.48rem;
      height: 1.8rem;
      font-size: var(--font-size-short);
      margin-bottom: 0.5rem;

    `)}

    
    
    padding: 0.7rem 0.2rem 0.7rem 0.7rem;

    &::placeholder {
      color: ${({ validationError }) => validationError ? '#090909' : 'rgba(255, 255, 255, 0.25)'};
      font-weight: 600;
      font-size: var(--font-size-medium);

      ${DesktopSmall(css`
        font-size: var(--font-size-small);
    	`)}

    }
  }

`
