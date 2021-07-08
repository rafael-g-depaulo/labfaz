import React, { FC } from 'react'

import { StyledTitle } from './style'

export interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children,
  ...props
}) => {

  return (
    <StyledTitle 
      as={`h${level}`}
      children={children}
      level={level}
      {...props}
    />
  )
}
