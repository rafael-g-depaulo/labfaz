import React, { FC } from 'react'

import { StyledTitle } from './style'

export interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4 
  as?: string
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children
}) => {

  return (
    <StyledTitle level={level}>
      {children}
    </StyledTitle>
  )
}
