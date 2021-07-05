import React, { FC } from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin
}from 'react-icons/fa'

import Logo from 'Components/Logo'
import { Container, Icon, IconsDiv } from './style'

export const Header: FC = () => {
  return (
    <Container>
      <Logo />
      <IconsDiv>
        <Icon to="facebook.com">
          <FaFacebookSquare />
        </Icon>
        <Icon to="facebook.com">
          <FaTwitterSquare />
        </Icon>
        <Icon to="facebook.com">
          <FaGooglePlusSquare />
        </Icon>
        <Icon to="facebook.com">
          <FaLinkedin />
        </Icon>
      </IconsDiv>
    </Container>
  )
}

export default Header
