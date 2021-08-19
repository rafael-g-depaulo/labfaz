import React, { FC } from 'react'
import { Image } from 'Utils/Image'

import { Container, Image as Frame, ImageDiv } from './style'

interface ContainerProps {
  image: Image
}

export const WithImageContainerForm: FC<ContainerProps> = ({ children, image}) => {

  return (
    <Container>
      <ImageDiv>
        <Frame src={image.url} alt={image.alternativeText} />
      </ImageDiv>
      {children}
    </Container>
  )
}

export default WithImageContainerForm;
