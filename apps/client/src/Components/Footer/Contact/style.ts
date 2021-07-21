import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { Mobile, DesktopSmall } from 'Utils/breakpoints';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${DesktopSmall(css`
    height: 4.7rem;
    justify-content: space-between;
  `)}
  ${Mobile(css`
    align-items: center;
  `)}
`
export const Icon = styled.div`
  color: var(--button-color-yellow);
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
  `)}
`;

export const Title = styled(Text)`
  && {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size-large);
    color: var(--button-color-yellow);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
    ${Mobile(css`
      font-weight: 500;
    `)}
  }
`

export const Subtitle = styled(Text)`
  && {
    font-weight: 500;
    font-size: var(--font-size-large);
    color: var(--button-color-yellow);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
