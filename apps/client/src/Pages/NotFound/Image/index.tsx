import { FC } from 'react'

import image from './ImageCircle.png'
import { ImageConstruction } from './style'

export const Image: FC = () => {
  return <ImageConstruction src={image} alt="not_found" />
}

export default Image
