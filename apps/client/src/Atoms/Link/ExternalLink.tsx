import { FC } from "react"
import { StyledLink } from "./StyledLink"

export interface ExternalLinkProps {
  to: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  to,
  ...props
}) => {
  return (
    <StyledLink to={to} {...props} target="_blank" rel="noopener noreferrer" />
  )
}

export default ExternalLink
