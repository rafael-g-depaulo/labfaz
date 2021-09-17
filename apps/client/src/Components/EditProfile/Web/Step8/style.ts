import styled, { css } from 'styled-components'

import { TextInput } from 'Components/Inputs/TextInput'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.19rem;
    color: #fafafa;

    position: relative;

    .errorMessage {
      position: absolute;
      top: 1.5rem;
      left: 0;

      color: red;
      font-size: var(--font-size-small);

      ${DesktopSmall(css`
        top: 1.3rem;
      `)}
    }

    .obrigatory {
      color: red;
      display: inline;
    }

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      margin-bottom: 0.8rem;
    `)}
  }
`

export const LeftSide = styled.div`
  width: 35.5rem;
  height: 50rem;

  border-right: 2px dashed #262626;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}

  display: flex;
  flex-direction: column;  
`

export const LeftSideContent = styled.div`
  margin: 5.9rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 3rem 2.23rem 6.25rem 2.23rem;
  `)}

  .container {
    position: relative;
    margin-bottom: 3.7rem;

    ${DesktopSmall(css`
      margin-bottom: 2rem;
    `)}
  }
`

export const RightSide = styled.div`
  width: 35.5rem;
  height: 50rem;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}

  display: flex;
  flex-direction: column;

  position: relative;
`
export const RightSideContent = styled.div`
  margin: 5.9rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 3rem 2.23rem 5.2rem 2.23rem;
  `)}
`
export const InputText = styled(TextInput)`
  ${DesktopSmall(css`

    label {
      font-size: var(--font-size-small);
    }

    top: 1rem;
    right: 0;

  `)}

  position: absolute;
  top: 0;
  right: 0;
  
`

export const CnpjText = styled(TextInput)`

  top: 75%;

  ${DesktopSmall(css`
    label {
      font-size: var(--font-size-small);
    }
    
    top: 75%;
  `)}

  position: absolute;
  right: 0;
`

export const TextInputContainer = styled.div`
  margin-top: 3.55rem;

  ${DesktopSmall(css`
    margin-top: 2.38rem;
  `)}

  input {
    width: 21.7rem;

    ${DesktopSmall(css`
      width: 14.5rem;
    `)}
  }
`

export const InputRadioContainer = styled.div`
  margin-bottom: 1rem;

  ${DesktopSmall(css`
    margin-bottom: 0.5rem;
  `)}
`
