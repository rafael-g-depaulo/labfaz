import styled, { css } from 'styled-components'

import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton';
import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const NavigationContainer = styled.div`
  width: 18rem;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${DesktopSmall(css`
    width: 13rem;
    height: 5.5rem;
  `)}
`

export const Title = styled(Text)`
  && {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size-large);
    color: var(--color-text-beige);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`

export const Navbar = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const NavLink = styled(InternalLinkButton)`
  ${Navbar} & {
    color: var(--color-text-beige);
    background-color: transparent;
    border: none;
    font-size: var(--font-size-large);
    font-weight: 500;
    margin: 0;
    padding: 0 0 0 1rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
  }
`
