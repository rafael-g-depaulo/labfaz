import { css, CSSProp } from "styled-components"

export default (cssCode: CSSProp) => css`
  @media (max-width: 500px) {
    ${cssCode}
  }
`
