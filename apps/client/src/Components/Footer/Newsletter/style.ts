import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  gap: 0.7rem;

  ${DesktopSmall(css`
    height: 5.5rem;
  `)}
`

export const Title = styled(Text)`
  && {
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-text-pink);
    font-size: var(--font-size-medium);
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
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: var(--backgound-black-gray);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-large);

  ::placeholder {
    color: var(--color-text-dark-gray);
    font-size: var(--font-size-medium);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }

  :focus {
    outline: var(--background-pink);
    color: var(--color-text-white);
  }
  ${DesktopSmall(css`
    font-size: var(--font-size-short);
    max-width: 8rem;
  `)}
`

export const Button = styled.button`
  background-color: var(--backgound-black-gray);
  border: 1px solid rgba(255, 255, 255, 0.7);
  /* border: none; */
  color: var(--color-text-white);
  font-size: var(--font-size-medium);
  padding: 0 1rem;
  cursor: pointer;
  
  ${DesktopSmall(css`
    font-size: var(--font-size-short);
    padding: 0 0.5rem;
  `)}
`
