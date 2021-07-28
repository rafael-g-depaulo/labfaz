import styled, { css } from 'styled-components'
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
  
  margin: 16.16rem 8.6rem 5.2rem 8.6rem;

  ${DesktopSmall(css`
    margin: 10.83rem 5.8rem 16rem 5.8rem;
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

  .radioLabel {
    font-size: var(--font-size-default);
    font-weight: 600;
    margin-bottom: 1.98rem;
    display: inline-block;
  }
`
export const RightSideContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 11.05rem;

  ${DesktopSmall(css`
    margin-top: 7.4rem;
  `)}

  div {
    display: flex;
    column-gap: 3.7rem;
    
    ${DesktopSmall(css`
      column-gap: 2.6rem;
    `)}
  }
`

export const SelectContainer = styled.label`
  label {
    font-weight: 600;
    font-size: var(--font-size-large);
    display: block;

    margin-bottom: 0.5rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const LeftSelectContainer = styled.label`
  display: block;
  width: 12.475rem;

  ${DesktopSmall(css`
      width: 8.33rem;
  `)}

  label {
    display: block;
    margin-bottom: 0.75rem;
    font-size: var(--font-size-large);
    font-weight: 600;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
  
`


export const InputRadioContainer = styled.div`
  margin-bottom: 2.21rem;

  ${DesktopSmall(css`
    margin-bottom: 1.45rem;
  `)}
`
