import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall, Mobile } from "Utils/breakpoints"

interface ContainerProps {
  paddingLeft: number
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  position: relative;

  p {
    position: absolute;
    white-space: nowrap;
    color: red;
    font-size: var(--font-size-small);
    bottom: -1.2rem;
    left: 2.2rem;
  }


  input {
    position: absolute;
    width: 100%;
    opacity: 0;

    &:hover {
      cursor: pointer;
    }
  }

  .radio_input {
    width: 1rem;
    height: 1rem;


    border-radius: 50%;
    border: 1px solid rgba(250, 250, 250, 0.7);

    box-sizing: border-box;
  
    background: #090909;  

    padding: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  .radio_input::after {
    content: '';

    width: 100%;
    height: 100%;

    ${Mobile(css`
      width: 7px;
      height: 7px;
    `)}
  
    border-radius: 50%;

    display: block;

    background-color: #FC0061;

    transform: scale(0);

    transition: transform 0.15s;
  }

  input:checked  + .radio_input::after {
    transform: scale(1);
  }

  label {
    font-weight: 600;
    color: #FAFAFA;
    display: block;

    padding-left: 1.20rem;
    padding-right: 0.5rem;

    
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}

    ${Mobile(css`
      font-size: var(--font-size-large);
    `)}

    &:hover {
      cursor: pointer;
    }
  }

  .informationContainer {
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      span {
        display: none;

        ${DesktopSmall(css`
          display: block;
        `)}

        ${Mobile(css`
          display: block;
        `)}
      }
    }

    span {
      display: none;
      position: absolute;
      
      padding: 0.5rem;

      width: 13rem;

      font-size: 10px;
      z-index: 3;

      background-color: #6C6C6C;
      color: #fff;
    
      font-weight: 400;

      right: 2.2rem;

      transform: translateX(50%);
    }

    .svgContainer {
      position: relative;

      svg {
        width: 15px;
        height: 15px;
        color: #6C6C6C;
      }     
    }
  }
`

export const Input = styled(Field)``
