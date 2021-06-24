import React, { FC } from "react"
import { Wrapper, Container, Image } from "./styles"
import Text from "Components/Text"

import { DataObject } from "Api/AboutUs"

export interface AboutProps {
  data: DataObject[]
}

const About: FC<AboutProps> = ({data}) => {

  return (
    <Wrapper>
      {
        data.map((item) => {
          return (
            <Container key={item.id}>
              <Text>
                {item.text}
              </Text>
              <Image src={item.img.img} alt={item.img.name}/>
            </Container>
          )
        })
      }
    </Wrapper>
  )
}

export default About
