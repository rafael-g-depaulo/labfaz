import React, { FC } from 'react'

import { ButtonProps } from '../ButtonProps'
import { StyledButton } from './style'

export const InternalLinkButton: FC<ButtonProps> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> = ({
  href,
  children,
  className,
  ...props
  }) => {
  return (
    <>
      <StyledButton 
        to={href}
        className={className}
        children={children}
        {...props}
      /> 
    </>
  )
}
