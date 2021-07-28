import styled, { css } from 'styled-components'

import { PasswordInput } from 'Components/Inputs/PasswordInput'

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

export const Input = styled(PasswordInput)`
  input {
    width: 21.7rem;

    ${DesktopSmall(css` 
      width: 14.48rem;
      font-size: var(--font-size-short);

      &::placeholder {
        font-size: var(--font-size-short);
      }
      
    `)}
  }
`

export const AvatarInput = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  background-color: #A3A3A3;
  margin-bottom: 1.94rem;

  ${DesktopSmall(css`
    width: 170.67px;
    height: 170.67px;
    margin-bottom: 2.5rem;
  `)}

  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;

    ${DesktopSmall(css`
      width: 170.67px;
      height: 170.67px;
    `)}
  }
`
