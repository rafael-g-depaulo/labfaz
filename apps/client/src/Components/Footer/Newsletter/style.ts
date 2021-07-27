import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.5rem;
  gap: 0.7rem;

  ${DesktopSmall(css`
    height: 4.7rem;
  `)}
`

export const Title = styled(Text)`
  && {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-text-yellow);
    font-size: var(--font-size-large);
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const FormContainer = styled.div`
  display: flex;
  background-color: var(--color-text-yellow);
`

export const Input = styled.input`
  max-width: 15rem;
  border: none;
  border-right: 1px solid var(--background-pink);
  background-color: var(--color-text-yellow);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-large);

  ::placeholder {
    color: var(--background-pink);
    font-size: var(--font-size-large);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }

  :focus {
    outline: var(--background-pink);
    color: var(--background-pink);
  }
  ${DesktopSmall(css`
    font-size: var(--font-size-short);
    max-width: 8rem;
  `)}
`

export const Button = styled.button`
  background-color: var(--color-text-yellow);
  border: none;
  color: var(--background-pink);
  font-size: var(--font-size-large);
  padding: 0 1rem;
  cursor: pointer;
  
  ${DesktopSmall(css`
    font-size: var(--font-size-short);
    padding: 0 0.5rem;
  `)}
`
