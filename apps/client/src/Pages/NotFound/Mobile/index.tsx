import React, { FC } from 'react'

import Header from "Components/Header"
import Image from '../Image'
import {
  Container,
  Text,
  Rectangle
} from 'Pages/Contruction/Mobile/style'

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
      {/* Add footer component */}
    </Container>
  )
}

export default Mobile
