import styled, { css } from 'styled-components'

import { PasswordInput } from 'Components/Inputs/PasswordInput'

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
    object-fit: cover;

    outline: none;
    
    ${DesktopSmall(css`
      width: 166px;
      height: 166px;
    `)}
  }
`

export const PasswordInputContainer = styled.div`
  margin-bottom: 3.5rem;

  ${DesktopSmall(css`
    margin-bottom: 2rem;
  `)}
`

export const InputCheckBoxContainer = styled.div`
  width: 21.7rem;
  position: relative;
  
  ${DesktopSmall(css`
    width: 14.4rem;
  `)}

  & > div {
    display: inline-flex;
    

    label {
      font-size: var(--font-size-medium);
      line-height: 14px;

      ${DesktopSmall(css`
        font-size: var(--font-size-small);
      `)}
    }

    a {
      color: #fafafa;
    }
  }

  .errorMessage {
    color: red;
    font-size: var(--font-size-small);
    position: absolute;

    left: 2.2rem;
    top: 3rem;

    ${DesktopSmall(css`
      top: 2.2rem; 
    `)}
  }
`
