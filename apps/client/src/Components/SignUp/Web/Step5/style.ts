import { TextInput } from 'Components/Inputs/TextInput'
import styled, { css } from 'styled-components'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;

  .errorMessage {
      position: absolute;
      color: red;
      font-size: var(--font-size-short);
      top: 1.2rem;
      left: 0;
      white-space: nowrap;

      ${DesktopSmall(css`
        font-size: 8px;
        top: 0.8rem;
      `)}      
    }

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: var(--font-size-large);

    position: relative;

    color: #fafafa;

    .obrigatory {
      color: red;
      display: inline;
      font-size: var(--font-size-short);
    }
  
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      display: inline-block;
      margin-bottom: 0rem;
    `)}
  }
`

export const LeftSide = styled.div`
  width: 35.5rem;
  height: 50rem;

  border-right: 2px dashed #262626;

  position: relative;

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
  margin-bottom: 0.6rem;

  ${DesktopSmall(css`
    margin-bottom: 0rem;
  `)}
`
export const SelectContainer = styled.div`
  width: 12.4rem;
  margin-bottom: 3.16rem;
  
  ${DesktopSmall(css`
    width: 8.36rem;
    margin-bottom: 1.5rem;
  `)}
`

export const FileContainer = styled.div`
  margin-top: 2rem;

  .fileLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: var(--font-size-large);

    position: relative;

    color: #fafafa;
  
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      display: inline-block;
      margin-bottom: 0.5rem;
    `)}
  }

  ${DesktopSmall(css`
    margin-top: 0.5rem;
  `)}
`

export const OtherTechnicalArea = styled(TextInput)`

  ${DesktopSmall(css`
    position: absolute;
    bottom: 4.5rem;
    right: 1rem;
  `)}
`
