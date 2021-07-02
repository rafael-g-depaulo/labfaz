import styled, { css } from 'styled-components'
import {DesktopSmall} from 'Utils/breakpoints'

export const Title = styled.p`
  font-size: var(--font-size-title-small);
  font-weight: bold;
  color: var(--background-pink);
  margin: 0;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-smaller);
  `)}
`
