import React, { FC } from 'react'

import { StyledText } from './style'

export interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4 
  color?: 'white' | 'yellow' | 'black' | 'pink' 
}

export const Text: FC<TitleProps> = ({
  level = 0,
  children,
  color,
  ...props
}) => {

  return (
    <StyledText 
      level={level} 
      color={color}
      {...props}
    >
      {children}
    </StyledText>
  )
}
