import React, { FC } from 'react'

import image from './EmailVerification.png'
import { ImageConstruction } from './styles'

export const Image: FC = () => {
  return <ImageConstruction src={image} alt="error" />
}

export default Image
