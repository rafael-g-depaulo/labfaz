import { FC } from 'react'
import { Image } from '@labfaz/strapi-utils'

import { Container, Frame, ImageDiv, PageTitle, Content, Line } from './style'

export interface ContainerProps {
  image: Image,
  title: string
}

export const WithImageContainerForm: FC<ContainerProps> = ({ children, image, title}) => {

  return (
    <Container>
      <PageTitle> { title } </PageTitle>
      <Line />
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
