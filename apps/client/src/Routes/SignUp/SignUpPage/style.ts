import styled, { css } from 'styled-components'
import { DesktopSmall } from 'Utils/breakpoints'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5.83rem;

  ${DesktopSmall(css`
    padding-top: 3.91rem;
  `)}
`
