import styled, { css } from 'styled-components'

import { Field } from 'formik'
import { Text } from 'Components/Typography/Text'
import { TextInput } from 'Components/Inputs/TextInput'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
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
  
  margin: 9.6rem 3.3rem 5.2rem 3.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;


  ${DesktopSmall(css`
    margin: 6.44rem 3.3rem 0rem 3.3rem;
  `)}
`
export const AvatarInput = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  background-color: #A3A3A3;
  margin-bottom: 1.94rem;

  ${DesktopSmall(css`
    width: 171px;
    height: 171px;
  `)}

  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;

    ${DesktopSmall(css`
      width: 171px;
      height: 171px;
    `)}
  }
`
export const InputFile = styled(Field)`

	position: relative;
	z-index: -1;

  & + .fileContent {
    width: 12.4rem;
    height: 2.55rem;
    background-color: #FFFFFF;

    padding-left: 0.83rem;

    
    position: relative;

    display: flex;
    align-items: center;

    div {
      position: absolute;
      width: 1px;
      height: 22px;
      background-color: #C4C4C4;

      right: 3.03rem;
      top: 25%;

      z-index: 1;
    }

    img {
      position: absolute;
      z-index: 1;
      width: 24px;
      height: 24px;

      right: 0.64rem;
      top: 25%;

      pointer-events: none;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
`

export const SelectContainer = styled.label`
  
  margin-top: 3.6rem;

  ${DesktopSmall(css`
    margin-top: 2.42rem;
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
`

export const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5.4rem;
  
  ${DesktopSmall(css`
    margin-top: 5rem 
  `)}

  div {
    display: flex;
    column-gap: 3.7rem;
    
    ${DesktopSmall(css`
      column-gap: 2.6rem;
    `)}
  }
`
export const FormInputText = styled(TextInput)``

export const InputFileText = styled(Text)`
  font-size: var(--font-size-medium);
  color: #C4C4C4;
`
