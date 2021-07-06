import React, { FC } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'
import image from '../construction.png'
import {
  Container,
  Text,
  ImageConstruction,
  Circle,
  ImageDiv,
  Rectangle,
  Triangle
} from './style'

export const Web: FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <Rectangle> 
          <Triangle />
          <ImageDiv>
            <Circle />
            <ImageConstruction src={image} alt="construction" />
          </ImageDiv>
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
