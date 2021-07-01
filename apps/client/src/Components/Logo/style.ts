import styled, { css } from 'styled-components'
import {DesktopSmall} from 'Utils/breakpoints'

export const Title = styled.h1`
  font-size: var(--font-size-title-small);
  color: var(--background-pink);
  margin: 0;

  ${DesktopSmall(css`
    font-size: 22px;
  `)}
`
