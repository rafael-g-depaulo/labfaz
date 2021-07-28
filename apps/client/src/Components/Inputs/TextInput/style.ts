import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall } from "Utils/breakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  overflow: hidden;


  ${DesktopSmall(css`
    margin-bottom: 0.5rem;
  `)}
  
  label {
    font-weight: 600;
    font-size: var(--font-size-large);
    color: var(--color-text-black);
    /* margin-bottom: -0.5rem; */
    margin-bottom: 0.75rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
       margin-bottom: 0.5rem;
    `)}
  }
  
  input {
    width: 12.4rem;
    height: 2.55rem;

    ${DesktopSmall(css`
      width: 8.33rem;
      height: 1.8rem;
      font-size: var(--font-size-short);
    `)}

    margin-bottom: 1.5rem;
    
    border: 0;
    padding: 0.7rem 0.2rem 0.7rem 0.7rem;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
      font-weight: 600;
      font-size: var(--font-size-large);

      ${DesktopSmall(css`
        font-size: var(--font-size-small);
    	`)}
    }
  }
`

export const Input = styled(Field)``
