import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall } from "Utils/breakpoints"

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  label {
    font-weight: 600;
    color: var(--color-text-black);
    display: block;
    
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}


    &:hover {
      cursor: pointer;
    }
  }
  
  input{
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:checked, &:not(:checked) {
      position: absolute;
      left: -9999px;
    }
    
    &:checked + label, &:not(:checked) + label {
      position: relative;
      padding-left: 3rem;
      padding-top: 0.1rem;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: var(--color-text-black);

      ${DesktopSmall(css`
        padding-left: 2rem;
        padding-top: 0rem;
      `)}
    }

    &:checked + label:before, &:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 22px;
      height: 22px;
      border: 1px solid #C4C4C4;
      border-radius: 100%;
      background: rgba(0, 0, 0, 0.46);  

      ${DesktopSmall(css`
        width: 14.75px;
        height: 15.08px;
      `)}
    }
    
    &:checked + label:after, &:not(:checked) + label:after {
      content: '';
      width: 8px;
      height: 8px;
      background: #C4C4C4;
      position: absolute;
      top: 8px;
      left: 8px;
      border-radius: 50%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;

      ${DesktopSmall(css`
        width: 5.5px;
        height: 5.5px;

        top: 5.5px;
        left: 6px;
      `)}
    }
    
    &:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    &:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export const Input = styled(Field)``
