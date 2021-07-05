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
        className={buttonColor} 
        children={children}
        as="a"
        {...props}
      /> 
    </>
  )
}
