import React, { FC } from 'react'

import Header from "Components/Header"
import Image from '../Image'
import {
  Container,
  Text,
  Rectangle
} from 'Pages/Construction/Mobile/style'
import Footer from 'Components/Footer'

export const Mobile: FC = () => {
  
  return (
    <Container>
      <Header />
      <div>
        <Rectangle>
          <Image />
        </Rectangle>
        <Rectangle invert={true}>
          <Text level={1}>
            A página que você está procurando não existe
          </Text>
        </Rectangle>
      </div>
      <Footer />
    </Container>
  )
}

export default Mobile
