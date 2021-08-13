import React, { FC } from "react"
import { Wrapper, Container, Image, TextDiv } from "../styles"
import { Text } from "Components/Typography/Text"

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
            <Container key={item.id} about="true">
              <TextDiv>
                <Text>
                  {item.text}
                </Text>
              </TextDiv>
              <Image src={item.img.url} alt={item.img.caption}/>
            </Container>
          )
        })
      }
    </Wrapper>
  )
}

export default About
