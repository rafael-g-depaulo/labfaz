import { TextInput } from 'Components/Inputs/TextInput'
import styled, { css } from 'styled-components'

import { DesktopSmall } from 'Utils/breakpoints'


export const Container = styled.div`
  display: flex;
`
export const LeftSide = styled.div`
  background-color: #CECECE;
  width: 35.5rem;
  height: 50rem;

  display: flex;
  flex-direction: column;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}
`

export const LeftSideContent = styled.div`
  
  margin: 5.4rem 3.3rem 5.2rem 3.3rem;

  div {
    display: flex;
    
    input {
      margin-right: 3.7rem
    }
  }

  ${DesktopSmall(css`

    margin: 3.65rem 2.23rem 5.2rem 2.23rem;

    div {
      display: flex;
      
      input {
        margin-right: 2.53rem
      }
    }
  `)}
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

  .radioContainer {
    display: flex;
    gap: 9.8rem;
    font-size: var(--font-size-default);
    font-weight: 600;
    margin-top: 4.8rem;

    ${DesktopSmall(css`
      margin-top: 1.2rem;
      gap: 6.62rem;
    `)}
  }

  .otherGender {
    position: absolute;
    right: -1rem;
    top: 0.5rem;
  }

  .radioLabel {
    font-size: var(--font-size-default);
    font-weight: 600;
    margin-bottom: 1rem;
    display: inline-block;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
export const RightSideContent = styled.div`
  margin: 5.4rem 3.3rem 5.2rem 3.3rem;
  position: relative;

  ${DesktopSmall(css`
    margin: 3.65rem 3.3rem 5.2rem 2.23rem;
  `)}
`
export const InputRadioContainer = styled.div`
  margin-bottom: 2.21rem;
  
  ${DesktopSmall(css`
    margin-bottom: 1rem;
  `)}
`

export const InputText = styled(TextInput)`
  input {
    width: 21.7rem;

    ${DesktopSmall(css`
      width: 14.5rem;
    `)}
  }
`
