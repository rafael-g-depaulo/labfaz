import { Text } from "Components/Typography/Text"
import { Field } from "formik"
import styled, { css } from "styled-components"
import { DesktopSmall } from "Utils/breakpoints"

export const Container = styled.div`

  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;

  width: 12.4rem;
  height: 2.55rem;

  ${DesktopSmall(css`
    width: 8.36rem;
    height: 2rem;
  `)}
    

  appearance: none;
  border: 0;
  padding-left: 0.83rem;
  padding-right: 0.83rem;

  &:hover {
    cursor: pointer;
  }

  input {
    display: none;
  }

  .fileContent {  
    display: flex;
    justify-content: center;

    div {
      position: absolute;
      width: 1px;
      height: 22px;
      background-color: #C4C4C4;

      right: 3.03rem;
      top: 25%;

      z-index: 1;

      ${DesktopSmall(css`
        right: 2rem;
        height: 18px;
      `)}
    }

    img {
      position: absolute;
      z-index: 1;
      width: 24px;
      height: 24px;

      right: 0.64rem;
      top: 25%;

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
export const Input = styled(Field)``

export const InputFileText = styled(Text)`
  font-size: var(--font-size-medium);
  color: #C4C4C4;
  
  ${DesktopSmall(css`
    font-size: var(--font-size-small);
  `)}
    
`
