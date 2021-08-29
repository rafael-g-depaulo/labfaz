import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall, Mobile } from "Utils/breakpoints"

interface ContainerProps {
  validationError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  position: relative;

  .divider {
    position: absolute;
    width: 1px;
    height: 22px;
    background-color: #C4C4C4;

    right: 3.03rem;
    top: 25%;

    z-index: 1;

    ${DesktopSmall(css`
      height: 18px;
      right: 2rem;
    `)}

    ${Mobile(css`
      height: 20px;
      right: 3rem;
    `)}
  }

  .labelContainer {
    position: absolute;
    left: 1.27rem;
    top: -50%;

    padding: 1px 9px;

    background-color: #111010;

    ${DesktopSmall(css`
      left: 0.6rem;
      top: -75%;
      padding: 0px 9px;
    `)}

    ${Mobile(css`
      left: 0.6rem;
      top: -75%;
      padding: 0px 9px;
    background-color: #000000;

    `)}
  }

  .labelContent {
    position: relative;
    display: inline-flex;
    flex-direction: column;

    column-gap: 0.5rem;

    label {
      font-weight: 600;
      font-size: var(--font-size-large);
      color: var(--color-text-black);
      /* margin-bottom: -0.5rem; */

      display: inline;
      color: #fff;

      position: relative;

      .obrigatory {
        display: inline;
        color: red;
        
        font-size: var(--font-size-default);

        ${DesktopSmall(css`
          font-size: var(--font-size-short);
        `)}
      }

      .errorMessage {
        position: absolute;
        color: red;
        left: 0;
        top: 1.2rem;

        white-space: nowrap;

        font-size: var(--font-size-small);

        ${DesktopSmall(css`
          font-size: 8px;
          top: 0.9rem;
        `)}

      }
      
      ${DesktopSmall(css`
        font-size: var(--font-size-small);
        /* margin-bottom: 0.5rem; */
      `)}

      ${Mobile(css`
        font-size: var(--font-size-large);
      `)}
    }
  }



  select {
    width: 12.4rem;
    height: 2.55rem;
    appearance: none;
    border: 0;
    padding-left: 0.83rem;
    padding-right: 0.83rem;
    color: rgba(255, 255, 255, 0.25);
    background-color: #090909;

    border: ${({ validationError }) => validationError ? '1px solid red' : '1px solid rgba(250, 250, 250, 0.7)'};

    ${DesktopSmall(css`
      width: 8.33rem;
      height: 1.8rem;
      font-size: var(--font-size-short);
    `)}

    ${Mobile(css`
      width: 13.3rem;
      height: 2.2rem;
      font-size: var(--font-size-large);
    `)}
    
    &:hover {
      cursor: pointer;
    }

    option {
      color: rgba(255, 255, 255, 0.25);

      ${DesktopSmall(css`
        font-size: var(--font-size-short);
      `)}

      ${Mobile(css`
        font-size: var(--font-size-large);
      `)}
    }
  }

  svg {
    position: absolute;
    z-index: 1;
    width: 24px;
    height: 24px;

    right: 0.64rem;
    top: 25%;

    color: #FAFAFA;

    pointer-events: none;

    ${DesktopSmall(css`
      width: 16px;
      height: 16px;
    `)}

    ${Mobile(css`
      width: 20px;
      height: 20px;
      right: 1rem;
    `)}
  }
`

export const Input = styled(Field)``
