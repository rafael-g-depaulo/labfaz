import React, { FC } from 'react'

import image from './ImageCircle.png'
import { ImageConstruction } from './style'

export const Image: FC = () => {
  return <ImageConstruction src={image} alt="construction" />
}

export default Image
