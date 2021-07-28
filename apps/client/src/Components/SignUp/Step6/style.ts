import styled, { css } from 'styled-components'

import { Field } from 'formik'
import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  .centralContent {
    width: 71rem;
    height: 50rem;
    background: linear-gradient(90deg, #CECECE 50%, #E5E5E5 50%);
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
`
export const TextLabel = styled(Text)`
  font-size: var(--font-size-large);
  font-weight: 600;

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
