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
    font-weight: 500;
    font-size: var(--font-size-medium);
    color: var(--color-text-white-gray);
    margin-bottom: 0.5rem;

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
  color: var(--button-color-pink);
  padding: 0;
  display: flex;
  align-items: center;

  
  svg {
    width: 20px;
    height: 20px;
    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}

    ${Mobile(css`
      color: var(--color-text-white-gray);
    `)}
  }
`;
