import React, { FC } from 'react'
import { Image } from 'Utils/Image'

import { Container, Frame, ImageDiv, PageTitle, Content } from './style'

interface ContainerProps {
  image: Image,
  title: string
}

export const WithImageContainerForm: FC<ContainerProps> = ({ children, image, title}) => {

  return (
    <Container>
      <PageTitle> { title } </PageTitle>
      <Content>
        <ImageDiv>
          <Frame src={image.url} alt={image.alternativeText} />
        </ImageDiv>
        {children}
      </Content>
    </Container>
  )
}

export default WithImageContainerForm;
