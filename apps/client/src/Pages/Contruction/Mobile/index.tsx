import React, { FC } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Image from '../Image'
import {
  Container,
  Text,
  Rectangle
} from './style'

export const Mobile: FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <Rectangle>
          <Image />
        </Rectangle>
        <Rectangle invert={true}>
          <Text>
            Olá, ainda estamos organizando as coisas.
          </Text>
        </Rectangle>
      </div>
      <Footer />
    </Container>
  )
}

export default Mobile
