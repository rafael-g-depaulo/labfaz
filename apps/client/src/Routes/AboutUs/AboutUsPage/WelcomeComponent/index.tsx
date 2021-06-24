import React, { FC } from 'react'
import { Container, Image } from "../styles"
import Text from "Components/Text"

import { DataObject } from "Api/AboutUs"



export interface WelcomeProps {
  data: DataObject
}

export const WelcomeComponent: FC<WelcomeProps> = ({ data }) => {
  
  return (
    <Container key={data.id}>
      <Image src={data.img.url} alt={data.img.name}/>
      <Text>
        {data.text}
      </Text>
    </Container>
  )
}

export default WelcomeComponent
