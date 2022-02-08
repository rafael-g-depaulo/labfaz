import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { Mobile, DesktopSmall, Desktop } from 'Utils/breakpoints';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  ${Desktop(css`
    height: min-content;
  `)}
  
  .icons {
    display: flex;
    flex-direction: column;
    ${DesktopSmall(css`
      gap: 0.2rem;
  `)}
  }

  ${DesktopSmall(css`
    height: min-content;
    gap: 0.5rem;
  `)}
  ${Mobile(css`
    align-items: center;
  `)}
`
export const Icon = styled.div`
  color: var(--button-color-pink);
  display: flex;
  align-items: center;
  svg {
    font-size: var(--font-size-large);
    margin-right: 0.5rem;
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
  ${Mobile(css`
    justify-content: center;
    color: var(--color-text-white-gray);
  `)}
`;

export const Title = styled(Text)`
  && {
    text-transform: uppercase;
    font-weight: 500;
    font-size: var(--font-size-medium);
    color: var(--color-text-pink);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
    ${Mobile(css`
      font-weight: 500;
      color: var(--color-text-white-gray);
    `)}
  }
`

export const Subtitle = styled(Text)`
  && {
    font-weight: 500;
    font-size: var(--font-size-medium);
    color: var(--color-text-white-gray);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
