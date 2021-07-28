import styled, { css } from 'styled-components'

import { TextInput } from 'Components/Inputs/TextInput'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.19rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const LeftSide = styled.div`
  background-color: #CECECE;
  width: 35.5rem;
  height: 50rem;

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

  background-color: #E5E5E5;
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

  `)}

  position: absolute;
  top: 0;
  right: 0;
`

export const CnpjText = styled(TextInput)`

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
  margin-bottom: 2.16rem;

  ${DesktopSmall(css`
    margin-bottom: 1.19rem;
  `)}
`
