import styled, { css } from 'styled-components'

import { DesktopSmall, MobileLarge, MobileSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  min-width: 100vw;
  max-height: 90vh;
  height: 90vh;
  display: grid;
  place-items: center;
`

export const PageTitle = styled.h1`
  font-size: var(--font-size-title-xxxlarge);
  justify-self: center;
  margin-right: 34%;

  ${DesktopSmall(css`
    display: none;
  `)}

  ${MobileLarge(css`
    display: none;
  `)}

  ${MobileSmall(css`
    display: none;
  `)}
`
