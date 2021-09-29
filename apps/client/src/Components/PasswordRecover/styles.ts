import styled, { css } from 'styled-components'

import { MobileSmall, Mobile, DesktopSmall, MobileLarge } from "Utils/breakpoints"
import { Text } from "Components/Typography/Text"


interface MessageProps {
  isError?: boolean
}

export const Wrapper = styled.div`
  max-width: 640px;
  max-height: 707px;
  min-height: 45vh;
  min-width: 50%;
  background-color: #111010;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form {
    min-height: 50%;
    max-width: 75%;
    min-width: 75%;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  >:nth-child(2) {
    margin-top: 2rem;
    align-self: center;
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    /* color: white; */
  }

  ${MobileLarge(css`
    border: none;

    form {
      margin-top: 0;
      min-width: 100%;
      align-items: center;
    }
  `)}

  ${Mobile(css`
    max-width: 100%;
    max-height: 100%;
    border: none;
    min-width: 100%;

    form {
      margin-top: 0;
      align-items: center;
      min-width: 100%;
    }
  `)}

  ${DesktopSmall(css`
    min-width: 100%;
    max-width: 305px;
    max-height: 406px;
    min-height: 500px;
    
    form {
      margin-top: 0;
    }
  `)}
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0.5rem 2rem;
  text-decoration: none;
  font-weight: bold;
  margin-top: 3rem;

  color: var(--color-text-yellow);
  background-color: var(--button-color-pink);

  border-top: 2px solid;
  border-left: 2px solid;
  border-color: var(--button-color-yellow);

  :disabled {
    opacity: 0.5;
  }

  ${MobileSmall(css`
    align-self: center;

    min-width: 230px;
    max-width: 305px;
    min-height: 38px;
  `)}

  ${MobileLarge(css`
    align-self: center;

    min-width: 230px;
    max-width: 305px;
    min-height: 38px;
  `)}
`


export const Button = styled.button`
  min-width: 379px;
  max-height: 48px;
  min-height: 48px;
  text-align: center;
  align-items: center;
  border: none;
  background-color: white;
`
export const Span = styled.p`
  margin-top: 1rem;
  text-decoration: underline;
  align-self: center;
  color: white;

  :hover {
    cursor: pointer;
  }
` 

export const Message = styled(Text)<MessageProps>`
  color: red;
  font-size: var(--font-size-medium);
  text-decoration: none;
  font-weight: 600;
  padding-top: 1em;
`
