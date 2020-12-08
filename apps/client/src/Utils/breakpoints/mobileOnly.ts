import { css, CSSProp } from "styled-components"
import Theme from "Themes"

export default <T extends Theme> (cssCode: CSSProp<T>) => css`
  @media (max-width: 800px) {
    ${cssCode}
  }
`
