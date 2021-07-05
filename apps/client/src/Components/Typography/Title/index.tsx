import React, { FC } from 'react'

import { StyledTitle } from './style'

export interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 
  titleColor?: 'white' | 'yellow' | 'black' | 'pink' 
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children,
  titleColor,
  ...props
}) => {

  return (
    <StyledTitle 
      as={`h${level}`}
      className={titleColor}
      children={children}
      {...props}
    />
  )
}
