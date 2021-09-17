import styled, { css } from 'styled-components'
import { Mobile } from 'Utils/breakpoints'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;

  ${Mobile(css`
    display: block;
  `)}
`
