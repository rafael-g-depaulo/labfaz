import React, { FC } from "react"
import { Wrapper, Container, Image } from "../styles"
import Text from "Components/Text"

import { DataObject } from "Api/AboutUs"

export interface AboutProps {
  data: DataObject[]
}

const About: FC<AboutProps> = ({data}) => {

  return (
    <Wrapper marginBottom="1em">
      {
        data.map((item) => {
          return (
            <Container key={item.id}>
              <Text>
                {item.text}
              </Text>
              <Image src={item.img.url} alt={item.img.caption}/>
            </Container>
          )
        })
      }
    </Wrapper>
  )
}

export default About
