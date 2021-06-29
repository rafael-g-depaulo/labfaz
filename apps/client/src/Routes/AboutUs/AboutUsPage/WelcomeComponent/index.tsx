import React, { FC } from 'react'
import { Container, Image, TextDiv } from "../styles"
import { Text } from "Components/Text"

import { DataObject } from "Api/AboutUs"



export interface WelcomeProps {
  data: DataObject
}

export const WelcomeComponent: FC<WelcomeProps> = ({ data }) => {

  
  return (
    <Container key={data.id} marginTop="4em">
      <TextDiv position="right">
        <Text>{data.text}</Text>
      </TextDiv>
      <Image src={data.img.url} alt={data.img.caption} position="left"/>
    </Container>
  )
}

export default WelcomeComponent
