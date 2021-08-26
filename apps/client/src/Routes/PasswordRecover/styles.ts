import styled, { css } from 'styled-components'

import { DesktopSmall, MobileLarge, MobileSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
`

export const PageTitle = styled.h1`
  font-size: var(--font-size-title-xxlarge);
  justify-self: center;
  margin-right: 40%;
  margin-top: 3vh;
  margin-bottom: 2vh;

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
