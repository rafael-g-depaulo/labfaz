import styled, { css } from 'styled-components'
import { Field } from 'formik'

import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;

  .obrigatory {
    color: red;
    display: inline;
    font-size: var(--font-size-default);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const LabelText = styled(Text)`
  margin-bottom: 1.5rem;
  font-weight: 600;

  color: #fafafa;

  position: relative;

  .errorMessage {

    color: red;
    position: absolute;

    font-size: var(--font-size-small);

    top: 1.3rem;
    left: 0;

    ${DesktopSmall(css`
      font-size: 8px;
      top: 1rem;

    `)}
  }


  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
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
  
  margin: 2.27rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 1.52rem 4.09rem 5.2rem 2.23rem;
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

  ${DesktopSmall(css`
    margin: 1.52rem 4.09rem 5.2rem 2.23rem;
  `)}

`

// export const InputCheckBox = styled(Input)`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 0.3rem;

//   input[type="checkbox"] {
//     margin-right: 1.2rem;
//   }
// `

export const InputCheckBox = styled(Field)`
  margin-right: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`

export const InputCheckBoxContainer = styled.div`
  font-weight: 600;
  margin-bottom: 2.21rem;
  margin-top: 2rem;
  display: flex;

  ${DesktopSmall(css`
    margin-top: 1.5rem;
    margin-bottom: 0;
  `)}
`

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 1.8rem;

  ${DesktopSmall(css`
    margin-bottom: 1rem;
  `)}
`

export const TextInputContainer = styled.div`
  label {
    color: #ffffff;
    display: block;
    margin-bottom: 0.5rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
