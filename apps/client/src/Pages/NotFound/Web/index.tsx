import React, { FC } from 'react'

import Header from "Components/Header"
import Footer from 'Components/Footer'
import Image from "../Image"
import { Text, Container, Content, Rectangle2 } from './style'

export const Web: FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Rectangle2>
          <Image />
          <Text>
            A página que você está procurando não existe.
          </Text>
        </Rectangle2>
      </Content>
      <Footer />
    </Container>
  )
}

export default Web
