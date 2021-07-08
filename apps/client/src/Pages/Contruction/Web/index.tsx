import React, { FC } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Image from '../Image'
import {
  Container,
  Text,
  Rectangle
} from './style'
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

export interface Props {
  data: SocialNetworksLabfaz
}

export const Web: FC<Props> = ({ data }) => {

  return (
    <Container>
      <Header data={data!}/>
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
