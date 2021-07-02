import React, { FC } from 'react'

import { StyledText } from './style'

export interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4 
}

export const Text: FC<TitleProps> = ({
  level = 0,
  children,
  ...props
}) => {

  return (
    <StyledText level={level} {...props}>
      {children}
    </StyledText>
  )
}
