import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall, Mobile } from "Utils/breakpoints"

export const Container = styled.div`
  display: inline-flex;
  cursor: pointer;

  position: relative;

  align-items: center;
  justify-content: space-between;

  ${Mobile(css`
    align-items: flex-start;
  `)}

  p {
    position: absolute;
    font-size: var(--font-size-small);
    white-space: nowrap;
    bottom: -1.5rem;
    left: 2.2rem;
    color: red;
  }

  input {
    opacity: 0;
    position: absolute;
  
    z-index: 2;

    &:hover {
      cursor: pointer;
    }
  }

  .checkbox_input {
    width: 1rem;
    height: 1rem;
    padding: 5px;

    border: 1px solid rgba(250, 250, 250, 0.7);

    ${Mobile(css`
      width: 30px;
      height: 20px;
      padding: 7px;
    `)}

    background: rgba(0, 0, 0, 0.46);  

    &:hover {
      cursor: pointer;
    }
  }

  .checkbox_input::after {
    content: '';

    width: 6px;
    height: 6px;

    border-radius: 50%;

    display: block;

    background-color: #FC0061;

    transform: scale(0);

    transition: transform 0.15s;
  }

  input:checked  + .checkbox_input::after {
    transform: scale(1);
  }
  
  label {
    font-weight: 600;
    color: var(--color-text-black);
    display: inline-block;

    color: #fafafa;

    margin-left: 1.20rem;

    line-height: 22px;

    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

    ${DesktopSmall(css`
      font-size: var(--font-size-small);
    `)}

    ${Mobile(css`
      font-size: var(--font-size-large);
    `)}

    &:hover {
      cursor: pointer;
    }
  }

  a {
    font-weight: 600;
    color: var(--color-text-black);
    font-size: var(--font-size-small);
    text-decoration: underline;
  }
`

export const Input = styled(Field)``
