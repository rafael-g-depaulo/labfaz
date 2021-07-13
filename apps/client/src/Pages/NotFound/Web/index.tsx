import React, { FC } from 'react'

import Header from "Components/Header"
import Image from "../Image"
import { Rectangle } from 'Pages/Contruction/Web/style'
import { Text, Container, Content } from './style'

export const NotFound: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Rectangle>
          <Image />
          <Text>
            A página que você está procurando não existe
          </Text>
        </Rectangle>
      </Content>
    </Container>
  )
}

export default NotFound
