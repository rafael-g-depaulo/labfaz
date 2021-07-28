import { Field } from 'formik'
import styled, { css } from 'styled-components'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.7rem;
    font-size: var(--font-size-large);
  
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      display: inline-block;
      margin-bottom: 1.19rem;
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
  margin: 2.27rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 1.56rem 4.65rem 5.2rem 2.23rem;
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
  margin: 2.27rem 3.3rem 5.2rem 3.3rem;
  position: relative;

  ${DesktopSmall(css`
    margin: 1.56rem 4.65rem 5.2rem 2.23rem;
  `)}
`

export const InputRadioContainer = styled.div`
  margin-bottom: 1.8rem;

  ${DesktopSmall(css`
    margin-bottom: 0.7rem;
  `)}
`
export const SelectContainer = styled.div`
  width: 12.4rem;
  margin-bottom: 3.16rem;
  
  ${DesktopSmall(css`
    width: 8.36rem;
    margin-bottom: 2rem;
  `)}
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

export const FileContainer = styled.div`
  margin-top: 3.6rem;

  ${DesktopSmall(css`
    margin-top: 2rem;
  `)}
`
