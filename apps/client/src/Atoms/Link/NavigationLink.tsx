import { FC } from "react"
import { StyledLink } from "./StyledLink"

export interface NavigationLinkProps {
  to: string
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  ...props
}) => {
  return (
    <StyledLink to={to} {...props} rel="noopener noreferrer" />
  )
}

export default NavigationLink
