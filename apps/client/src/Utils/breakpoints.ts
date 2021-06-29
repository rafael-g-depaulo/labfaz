import { css, CSSProp } from "styled-components"

export const Desktop = (cssCode: CSSProp) => css`
  @media (min-width: 720px) {
    ${cssCode}
  }
`

export const DesktopLarge = (cssCode: CSSProp) => css`
  @media (min-width: 1080px) {
    ${cssCode}
  }
`

export const DesktopSmall = (cssCode: CSSProp) => css`
  @media (min-width: 720px) and (max-width: 1079px) {
    ${cssCode}
  }
`

export const Mobile = (cssCode: CSSProp) => css`
  @media (max-width: 719px) {
    ${cssCode}
  }
`

export const MobileLarge = (cssCode: CSSProp) => css`
  @media (min-width: 420px) and (max-width: 719px) {
    ${cssCode}
  }
`

export const MobileSmall = (cssCode: CSSProp) => css`
  @media (max-width: 419px) {
    ${cssCode}
  }
`
