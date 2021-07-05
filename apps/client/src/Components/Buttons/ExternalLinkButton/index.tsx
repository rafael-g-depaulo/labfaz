import React, { FC } from 'react'

import { ButtonProps } from '../ButtonProps'
import { StyledButton } from './style'

export const ExternalLinkButton: FC<ButtonProps> = ({
  buttonColor = 'primary',
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        as="a"
        href={href} 
        className={buttonColor}
        children={children}
        {...props}
      /> 
    </>
  )
}
