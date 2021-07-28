import styled, { css } from 'styled-components'

import { Field } from 'formik'
import { Text } from 'Components/Typography/Text'
import { TextInput } from 'Components/Inputs/TextInput'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;
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
  border: 3px solid #FC0061;
  background-color: #A3A3A3;
  margin-bottom: 1.94rem;


  ${DesktopSmall(css`
    width: 172px;
    height: 172px;
  `)}

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;

    outline: none;
    
    object-fit: cover;

    ${DesktopSmall(css`
      width: 166px;
      height: 166px;
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

  display: flex;
  flex-direction: column;

  position: relative;
`

export const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 12rem;
  

  ${DesktopSmall(css`
    margin-top: 8rem;
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

export const PrivacityText = styled(Text)`
  width: 27rem;
  font-size: var(--font-size-small);
  line-height: 16px;

  color: #FAFAFA;

  ${DesktopSmall(css`
    width: 18rem;

    font-size: 9px;
    
    margin-top: 1rem;
  `)}

  margin-top: 2.5rem;

`
export const InputTextContainer = styled.div`
  margin-bottom: 4rem;

  ${DesktopSmall(css`
    margin-bottom: 2rem;
  `)}
`
