import { Text } from "Components/Typography/Text"
import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall, Mobile } from "Utils/breakpoints"

interface ContainerProps {
  validationError: boolean
}

export const Container = styled.div<ContainerProps>`

  position: relative;
  background-color: #090909;
  display: flex;
  align-items: center;

  .error {
    position: absolute;
    top: -1.5rem;
    left: 0;
    color: red;
    font-size: var(--font-size-small);
  }
  

  border: ${({validationError}) => validationError ? '1px solid red' : '1px solid rgba(250, 250, 250, 0.7)' };

  width: 12.4rem;
  height: 2.55rem;

  ${DesktopSmall(css`
    width: 8.36rem;
    height: 2rem;
  `)}

  ${Mobile(css`
    width: 100%;
  `)}

  appearance: none;
  padding: 0 0.83rem;

  &:hover {
    cursor: pointer;
  }

  input {
    opacity: 0;
    position: absolute;
    width: 12rem;
    cursor: pointer;
  }

  .fileContent {  
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    z-index: 10;

    div {
      position: absolute;
      width: 1px;
      height: 22px;
      background-color: #FAFAFA;

      right: 3.03rem;
      top: 25%;

      z-index: 1;

      ${DesktopSmall(css`
        right: 2rem;
        height: 18px;
      `)}

      ${Mobile(css`

      `)}
    }

    svg {
      z-index: 1;
      width: 24px;
      height: 24px;

      padding: 0;
      margin: 0;

      right: 0.9rem;
      top: 25%;
      color: #FAFAFA;

      ${DesktopSmall(css`
        width: 16px;
        height: 16px;
      `)}
    }
      
    &:hover {
      cursor: pointer;
    }
  }
`
export const Input = styled(Field)`
  cursor: pointer;
  position: relative;
`

export const InputFileText = styled(Text)`
  font-size: var(--font-size-medium);
  color: #FAFAFA;
  
  ${DesktopSmall(css`
    font-size: var(--font-size-small);
  `)}
    
`
