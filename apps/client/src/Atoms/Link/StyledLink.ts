import { getColor } from "GlobalStyles/cssVar"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("primary")};

  &:active {
    color: ${getColor("secondary")};
  }
`

export default StyledLink
