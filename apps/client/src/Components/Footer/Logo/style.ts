import styled, { css } from 'styled-components'

import { ExternalLinkButton } from 'Components/Buttons/ExternalLinkButton';
import { Text } from 'Components/Typography/Text'
import { Mobile, DesktopSmall } from 'Utils/breakpoints';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Icon = styled(ExternalLinkButton)`
  box-shadow: none;
  background-color: transparent;
  border: none;
  color: var(--button-color-yellow);
  padding: 0;
  display: flex;
  align-items: center;
  svg {
    font-size: var(--font-size-large);
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`;
