import React, { FC } from 'react'

import { ButtonProps } from '../ButtonProps'
import { StyledButton } from './style'

export const InternalLinkButton: FC<ButtonProps> = ({
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        to={href}  
        children={children}
        {...props}
      /> 
    </>
  )
}
