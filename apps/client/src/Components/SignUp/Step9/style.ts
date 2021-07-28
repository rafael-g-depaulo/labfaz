import styled, { css } from 'styled-components'

import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  
  .centralContent {
    width: 71rem;
    height: 50rem;
    background: linear-gradient(90deg, #CECECE 50%, #E5E5E5 50%);
  
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
  row-gap: 5rem;

  ${DesktopSmall(css`
    margin: 3.46rem 2.16rem 6.25rem 2.16rem;
    row-gap: 1rem;
  `)}

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 1.7rem;

  ${DesktopSmall(css`
    margin-bottom: 1.4rem;
  `)}
`
