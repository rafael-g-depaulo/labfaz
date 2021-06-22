import { css, CSSProp } from "styled-components"

export const ShortScreen = (cssCode: CSSProp) => css`
  @media (max-width: 780px) {
    ${cssCode}
  }
`

export const MediumScreen = (cssCode: CSSProp) => css`
  @media (min-width: 781px) and (max-width: 880px) {
    ${cssCode}
  }
`

export const LargeScreen = (cssCode: CSSProp) => css`
  @media (min-width: 881px) and (max-width: 1280px) {
    ${cssCode}
  }
`
