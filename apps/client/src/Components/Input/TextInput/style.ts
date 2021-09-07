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
  .obrigatory {
    color: #FC0061;
    display: inline;
    font-size: var(--font-size-default);
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
  .svgContainer {
    position: absolute;
    right: -1.5rem;
    top: -0.2rem;
    &:hover {
      p {
        display: block;
      }
    }
    svg {
      width: 15px;
      height: 15px;
      color: #6C6C6C;
    }
    p {
      display: none;
      position: absolute;
      
      padding: 0.5rem;
      width: 13rem;
      font-size: 10px;
      z-index: 3;
      background-color: #6C6C6C;
      color: #fff;
      font-weight: 400;
      right: 50%;
      ${Mobile(css`
        top: 50%;
      `)}
      transform: translateX(50%);
      &::after {
        content: '';
        
        width: 0; 
        height: 0; 
        position: absolute;
        z-index: 3;
        top: -5px;
        right: 50%;
        transform: translateX(50%);
      
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        
        border-bottom: 8px solid #6C6C6C;
      }
    }
  }
  .labelContainer {
    position: absolute;
    left: 1.27rem;
    top: -50%;
    padding: 1px 9px;
    background-color: #111010;
    ${DesktopSmall(css`
      padding: 0.1px 9px;
      left: 0.8rem;
      top: -68%;
    `)}
    ${Mobile(css`
      padding: 0.1px 9px;
      left: 0.4rem;
      top: -68%;
      background-color: #000000;
    `)}
    
    label {
      font-weight: 600;
      font-size: var(--font-size-large);
      color: var(--color-text-black);
      display: inline;
      color: #fff;
      ${DesktopSmall(css`
        font-size: var(--font-size-short);
        /* margin-bottom: 0.5rem; */
      `)}
      ${Mobile(css`
        font-size: var(--font-size-large);
      `)}
    }
  }
  .labelContent {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    column-gap: 0.5rem;
    position: relative;
    span {
      
      display: inline;
      position: absolute;
      width: 13rem;
      bottom: -15%;
      font-size: 10px;
      font-weight: 400;
      color: red;
      z-index: 1;
      ${DesktopSmall(css`
        bottom: -40%;
        font-size: 8px;
      `)}
      ${Mobile(css`
        bottom: -40%;
        white-space: nowrap;
        width: 5.5rem;
      `)}
    }
  }
  ${DesktopSmall(css`
    margin-bottom: 0.5rem;
  `)}
  
  
  input {
    width: 12.4rem;
    height: 2.55rem;
    background-color: #090909;
    color: #fafafa;
    
    ${DesktopSmall(css`
      width: 8.33rem;
      height: 1.8rem;
      font-size: var(--font-size-short);
    `)}
    ${Mobile(css`
      width: 13.3rem;
      height: 2.25rem;
      font-size: var(--font-size-medium);
    `)}
    
    border: ${({ validationError }) => validationError ? '1px solid red' : '1px solid rgba(250, 250, 250, 0.7)'};
    padding: 0.7rem 0.2rem 0.7rem 0.7rem;
    &::placeholder {
      color: rgba(255, 255, 255, 0.25);
      font-weight: 600;
      font-size: var(--font-size-large);
      ${DesktopSmall(css`
        font-size: var(--font-size-small);
    `)}
      ${Mobile(css`
        font-size: var(--font-size-medium);
        display: block;
        height: 2.2rem;
      `)}
    }
  }
`

export const Input = styled(Field)``
