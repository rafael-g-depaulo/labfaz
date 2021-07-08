import React, { FC } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Image from '../Image'
import {
  Container,
  Text,
  Rectangle
} from './style'

export const Web: FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <Rectangle> 
          <Image />
          <Text>
            Olá, ainda estamos organizando as coisas.
          </Text>
        </Rectangle>
      </div>
      <Footer />
    </Container>
  )
}

export default Web
