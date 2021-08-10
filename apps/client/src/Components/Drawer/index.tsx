import React, { FC, useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa"

import { Container, Haeder, Button, Title, Description, ContentDiv } from "./styles"

interface DrawerProps {
  description?: string,
  teamName?: string,
}

export const Drawer: FC<DrawerProps> = ({ children, description, teamName }) => {

  const [isVisible, setIsVisible] = useState(false)


  return(
    <Container>
      <Haeder display={isVisible}>
        <Title display={isVisible}> { teamName } </Title>
        <Button onClick={() => setIsVisible(!isVisible)}>
          {/* Change color and size later */}
          {isVisible ? <FaAngleUp size={35} /> : <FaAngleDown size={35}/>}
        </Button>
        <Description display={isVisible}> { description } </Description>
      </Haeder>
      <ContentDiv display={isVisible}>
        {children}
      </ContentDiv>
    </Container>
  )
}


export default Drawer;
