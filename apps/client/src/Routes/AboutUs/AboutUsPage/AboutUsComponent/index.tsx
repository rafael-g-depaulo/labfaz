import React, { FC } from "react"
import { Wrapper, Container, Image, TextDiv } from "../styles"
import { Text } from "Components/Typography/Text"

import { DataObject } from "Api/AboutUs"
import Markdown from "Components/Markdown"

export interface AboutProps {
  data: DataObject[]
}

const About: FC<AboutProps> = ({data}) => {

  return (
    <Wrapper>
      {data.map((item) => (
        <Container key={item.id} about="true">
          <TextDiv>
            {/* <Text>{item.text}</Text> */}
            <Markdown
              content={item.text}
              Text={Text}
            />
          </TextDiv>
          <Image src={item.img.url} alt={item.img.caption}/>
        </Container>
      ))}
    </Wrapper>
  )
}

export default About
