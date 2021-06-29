import React, { FC } from 'react'
import { Container, Image } from "../styles"
import { TextDiv } from "../styles"

import { DataObject } from "Api/AboutUs"



export interface WelcomeProps {
  data: DataObject
}

export const WelcomeComponent: FC<WelcomeProps> = ({ data }) => {

  
  return (
    <Container key={data.id} marginBottom="6em" marginTop="4em">
      <TextDiv position="right">
        <p>{data.text}</p>
      </TextDiv>
      <Image src={data.img.url} alt={data.img.caption} position="left"/>
    </Container>
  )
}

export default WelcomeComponent
