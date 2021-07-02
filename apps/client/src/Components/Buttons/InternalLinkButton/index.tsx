import React, { FC, ButtonHTMLAttributes } from 'react'

import { StyledButton } from './style'

export interface ButtonProps {
  href: string
  buttonColor?: 'white' | 'gray'
}

// type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const InternalLinkButton: FC<ButtonProps> = ({
  buttonColor = 'white',
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        to={href}  
        buttonColor={buttonColor} 
        {...props}
      > 
        {children} 
      </StyledButton>
    </>
  )
}
