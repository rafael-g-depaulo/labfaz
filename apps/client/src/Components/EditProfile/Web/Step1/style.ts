import { TextInput } from 'Components/Inputs/TextInput'
import styled, { css } from 'styled-components'

import { DesktopSmall } from 'Utils/breakpoints'


export const Container = styled.div`
  display: flex;

  background-color: #111010;
  
  label {
    color: #FAFAFA;
  }
`
export const LeftSide = styled.div`
  
  width: 35.5rem;
  height: 50rem;

  display: flex;
  flex-direction: column;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}

  border-right: 2px dashed #262626;
`

export const LeftSideContent = styled.div`
  
  margin: 6rem 3.3rem 5.2rem 3.3rem;

  div {
    display: flex;
    
    input {
      margin-right: 3.7rem;
    }
  }

  ${DesktopSmall(css`

    margin: 5rem 2.23rem 5.2rem 2.23rem;

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

  
  display: flex;

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
    color: #FAFAFA;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
export const RightSideContent = styled.div`
  margin: 5.4rem 3.3rem 5.2rem 3.3rem;
  position: relative;

  &  .genderContainer {
    margin-bottom: 5.5rem;

    position: relative;

    ${DesktopSmall(css`
      margin-bottom: 4rem;
    `)}
  }

  & .residencyContainer {
    display: flex;
    column-gap: 3.8rem;

    ${DesktopSmall(css`
      column-gap: 3rem;
    `)}
  }

  ${DesktopSmall(css`
    margin: 2rem 3.3rem 5.2rem 2.23rem;
  `)}
`
export const InputRadioContainer = styled.div`
  margin-bottom: 0.6rem;
  
  ${DesktopSmall(css`
    margin-bottom: 0.2rem;
  `)}
`

export const InputText = styled(TextInput)`

  width: 21.7rem;

  input {
    width: 100%;

    ${DesktopSmall(css`
      width: 14.5rem;
    `)}
  }
`

export const SelectContainer = styled.label`

  label {
    font-weight: 600;
    font-size: var(--font-size-large);
    
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
export const LeftSelectContainer = styled.label`
  width: 12.475rem;
  margin-left: 2.2rem;

  position: absolute;

  ${DesktopSmall(css`
    width: 8.33rem;
    bottom: -2.5rem;
  `)}
`

export const InputTextContainer = styled.div`
  margin-bottom: 5rem;

  ${DesktopSmall(css`
    margin-bottom: 2.42rem;
  `)}
`
