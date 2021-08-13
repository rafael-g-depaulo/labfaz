import React, { FC, useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa"

import { Title } from 'Components/Typography/Title'

import { Container, Haeder, Button, Description, ContentDiv } from "./styles"

interface DrawerProps {
  description?: string,
  teamName?: string,
}

export const Drawer: FC<DrawerProps> = ({ children, description, teamName }) => {

  const [isVisible, setIsVisible] = useState(false)


  return(
    <Container display={isVisible}>
      <Button onClick={() => setIsVisible(!isVisible)}>
        {/* Change color and size later */}
        {isVisible ? <FaAngleUp size={35} color="white" /> : <FaAngleDown size={35} color="white" />}
      </Button>
      <Haeder display={isVisible}>
        <Title level={1}> { teamName } </Title>
        <Description display={isVisible}> { description } </Description>
      </Haeder>
      <ContentDiv display={isVisible}>
        {children}
      </ContentDiv>
    </Container>
  )
}


export default Drawer;
