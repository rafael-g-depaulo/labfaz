import { css, CSSProp } from "styled-components"

export const MobileOnly = (cssCode: CSSProp) => css`
  @media (max-width: 500px) {
    ${cssCode}
  }
`
export const ScreenMobileSmaller = (cssCode: CSSProp) => css`
  @media(max-width: 330px) {
    ${cssCode}
  }
`
export const ScreenMobileShort = (cssCode: CSSProp) => css`
  @media(min-width: 375px) and (max-width: 459px) {
    ${cssCode}
  }
`

export const ScreenMobileMedium = (cssCode: CSSProp) => css`
  @media(min-width: 460px) and (max-width: 529px) {
    ${cssCode}
  }
`

export const ScreenMobileLarge = (cssCode: CSSProp) => css`
  @media(max-width: 374px) {
    ${cssCode}
  }
`
