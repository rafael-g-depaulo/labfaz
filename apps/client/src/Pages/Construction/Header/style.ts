import styled, { css } from 'styled-components'

import { Mobile } from 'Utils/breakpoints'
import{ ExternalLinkButton } from 'Components/Buttons/ExternalLinkButton'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Mobile(css`
    padding: 1.5rem 1rem;
  `)}
`;

export const IconsDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(ExternalLinkButton)`
  box-shadow: none;
  background-color: transparent;
  border: none;
  color: var(--background-pink);
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.2rem;
  }
`;
