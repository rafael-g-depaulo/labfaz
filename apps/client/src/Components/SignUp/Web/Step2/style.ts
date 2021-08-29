import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { TextInput } from 'Components/Inputs/TextInput'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;


  label {
    font-weight: 600;
    color: #FAFAFA;

    position: relative;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}

    .obrigatory {
      display: inline;
      color: red;

      font-size: var(--font-size-default);

      ${DesktopSmall(css`
        font-size: var(--font-size-short);
      `)}
    }

    .errorMessage {
      position: absolute;
      font-size: var(--font-size-small);
      color: red;
      top: 1.4rem;
      left: 0;

      display: block;

      white-space: nowrap;

      ${DesktopSmall(css`
        font-size: 8px;
        top: 1rem;
      `)}
    }
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

  
  margin: 1rem auto 0 auto;

  display: flex;
  flex-direction: column;

  .raceContainer {
    display: flex;
    column-gap: 10rem;

    ${DesktopSmall(css`
      column-gap: 5rem;
    `)}
  }

  .genderContainer {
    position: relative;

    .textInputContainer {
      position: absolute;
      bottom: -2rem;

      ${DesktopSmall(css`
        bottom: -2rem;
      `)}
    }
  }

  .genderIdentityContainer {
    margin-top: 4rem;

    ${DesktopSmall(css`
      margin-top: 2rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;

`

export const FormInputText = styled(TextInput)``

export const InputFileText = styled(Text)`
  font-size: var(--font-size-medium);
  color: #C4C4C4;
`

export const PrivacityText = styled(Text)`
  width: 27rem;
  font-size: var(--font-size-small);
  line-height: 16px;

  ${DesktopSmall(css`
    width: 18rem;

    font-size: 9px;
  `)}

  margin-top: 1rem;
`

export const InputRadioContainer = styled.div`
  margin-top: 1rem;

  svg {
    display: none;
  }

  ${DesktopSmall(css`
    margin-top: 0.5rem;

    svg {
      display: inline;
    }
  `)}

  label {
    font-size: var(--font-size-large);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const InformartionText = styled(Text)`
  font-size: var(--font-size-small);
  width: 26rem;

  color: #FAFAFA;

  line-height: 16px;

  margin-left: 2.2rem;

  ${DesktopSmall(css`
    display: none;
  `)}
`

export const InputText = styled(TextInput)`

`
