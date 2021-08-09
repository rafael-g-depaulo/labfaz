import React, { FC } from 'react'

import image from './ErrorCircle.png'
import { ImageConstruction } from './styles'

export const Image: FC = () => {
  return <ImageConstruction src={image} alt="not_found" />
}

export default Image
