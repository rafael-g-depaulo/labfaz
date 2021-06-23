import { css, CSSProp } from "styled-components"

export default (cssCode: CSSProp) => css`
  @media (max-width: 1023px) {
    ${cssCode}
  }
`
