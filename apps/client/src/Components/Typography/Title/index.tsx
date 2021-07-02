import React, { FC } from 'react'

import { StyledTitle } from './style'

export interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4 
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children,
  ...props
}) => {

  return (
    <StyledTitle level={level} {...props}>
      {children}
    </StyledTitle>
  )
}
