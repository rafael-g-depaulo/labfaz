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
export const PlayerSmallerWebScreen = (cssCode: CSSProp) => css`
  @media(min-width: 530px) and (max-width: 855px) {
    ${cssCode}
  }
`

export const PlayerShortWebScreen = (cssCode: CSSProp) => css`
  @media (max-width: 855px) {
    ${cssCode}
  }
`
export const PlayerMediumWebScreen = (cssCode: CSSProp) => css`
  @media (min-width: 856px) and (max-width: 959px) {
    ${cssCode}
  }
`
export const PlayerLargeWebScreen = (cssCode: CSSProp) => css`
  @media (min-width: 960px) and (max-width: 1150px) {
    ${cssCode}
  }
`
