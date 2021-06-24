import React, { FC } from "react"
import { Wrapper, AboutComponent, Image } from "./styles"
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
            <AboutComponent key={item.id}>
              <Text>
                {item.text}
              </Text>
              <Image src="https://i.imgur.com/rSnSOKD.jpega/6rKiG" alt="KKKKKKKKKK"/>
            </AboutComponent>
          )
        })
      }
    </Wrapper>
  )
}

export default About
