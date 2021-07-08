import React, { FC } from 'react'

import { StyledText } from './style'

export interface TextProps {
  children: React.ReactNode
}

export const Text: FC<TextProps> = ({
  children,
  ...props
}) => {

  return (
    <StyledText 
      children={children}
      {...props}
    />
  )
}
