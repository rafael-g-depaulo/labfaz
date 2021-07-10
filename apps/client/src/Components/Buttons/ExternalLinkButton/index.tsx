import React, { FC } from 'react'

import { ButtonProps } from '../ButtonProps'
import { StyledButton } from './style'

export const ExternalLinkButton: FC<ButtonProps> = ({
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        as="a"
        target="_blank"
        rel="noopener"
        href={href}
        children={children}
        {...props}
      /> 
    </>
  )
}
