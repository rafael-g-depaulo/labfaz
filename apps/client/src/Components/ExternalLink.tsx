import { FC } from 'react'

export interface LinkProps {
  href: string
}

export const ExternalLink: FC<LinkProps> = ({
  href,
  children,
  ...props
  }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      children={children}
      {...props}
    />
  )
}

export default ExternalLink
