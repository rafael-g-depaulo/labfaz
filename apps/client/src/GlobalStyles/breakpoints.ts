import { css, CSSProp } from "styled-components"

// export const desktopLarge = 1080
export const desktopSmall = 720
// export const mobileLarge = 420

const minBreakpoint = (breakpoint: number) => `(min-width: ${breakpoint}px)`
const maxBreakpoint = (breakpoint: number) => `(max-width: ${breakpoint-1}px)`

export const Desktop = (cssCode: CSSProp) => css`
  @media ${minBreakpoint(desktopSmall)} {
    ${cssCode}
  }
`

// export const DesktopLarge = (cssCode: CSSProp) => css`
//   @media ${minBreakpoint(desktopLarge)} {
//     ${cssCode}
//   }
// `

// export const DesktopSmall = (cssCode: CSSProp) => css`
//   @media ${`${minBreakpoint(desktopSmall)} and ${maxBreakpoint(desktopLarge)}`} {
//     ${cssCode}
//   }
// `

export const Mobile = (cssCode: CSSProp) => css`
  @media ${maxBreakpoint(desktopSmall)} {
    ${cssCode}
  }
`

// export const MobileLarge = (cssCode: CSSProp) => css`
//   @media ${`${minBreakpoint(mobileLarge)} and ${maxBreakpoint(desktopSmall)}`} {
//     ${cssCode}
//   }
// `

// export const MobileSmall = (cssCode: CSSProp) => css`
//   @media ${maxBreakpoint(mobileLarge)} {
//     ${cssCode}
//   }
// `
