import React, { FC } from 'react'

import { StyledTitle } from './style'

export interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4 
  color?: 'white' | 'yellow' | 'black' | 'pink' 
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children,
  color,
  ...props
}) => {

  return (
    <StyledTitle 
      as={`h${level}`}
      className={titleColor}
      children={children}
      {...props}
    >
      {children}
    </StyledTitle>
  )
}
