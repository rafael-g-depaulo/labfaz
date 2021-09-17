import styled, { css } from 'styled-components'

import { Field } from 'formik'
import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;

  .centralContent {
    width: 71rem;
    height: 50rem;
    display: flex;
    justify-content: center;

    ${DesktopSmall(css`
      width: 47.6rem;
      height: 33.5rem;
    `)}
  }
`

export const Content = styled.div`
  margin: 5.16rem 3.3rem 5.2rem 3.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .errorMessage {
    position: absolute;
    color: red;
    font-size: var(--font-size-short);
    top: 1.5rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-small);
    `)}
  }
`
export const TextLabel = styled(Text)`
  font-size: var(--font-size-large);
  font-weight: 600;
  
  color: #fafafa;

  .obrigatory {
    color: red;
    display: inline;
  }

  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
`

export const InputText = styled(Field)`
  width: 31.6rem;
  height: 22.2rem;

  margin-top: 1.83rem;
  resize: none;

  ${DesktopSmall(css`
    width: 21.19rem;
    height: 14.89rem;
    font-size: var(--font-size-short);
  `)}
`
