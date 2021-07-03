import React, { FC, ButtonHTMLAttributes } from 'react'

import { StyledButton } from './style'

export interface ButtonProps {
  href: string
  buttonColor?: 'primary' | 'secondary' | 'secondary-variant-1' | 'white' | 'gray'
}

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const ExternalLinkButton: FC<ButtonProps & ButtonType> = ({
  buttonColor = 'white',
  href,
  children,
  ...props
  }) => {
  return (
    <>
      <a href={href} >
        <StyledButton 
          buttonColor={buttonColor} 
          {...props}
        > 
          {children} 
        </StyledButton>
      </a>
      
    </>
  )
}
