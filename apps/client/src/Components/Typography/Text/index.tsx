import React, { FC } from 'react'

import { StyledText } from './style'

export interface TextProps {
  textColor?: 'white' | 'yellow' | 'black' | 'pink' 
}

export const Text: FC<TextProps> = ({
  children,
  textColor,
  ...props
}) => {

  return (
    <StyledText 
      className={textColor}
      children={children}
      {...props}
    />
  )
}
