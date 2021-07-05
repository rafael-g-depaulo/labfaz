import React, { FC } from 'react'

import { ButtonProps } from '../ButtonProps'
import { StyledButton } from './style'

export const InternalLinkButton: FC<ButtonProps> = ({
  buttonColor = 'primary',
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        to={href}  
        className={buttonColor} 
        {...props}
        children={children}
      /> 
    </>
  )
}
