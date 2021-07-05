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
        <Icon to="facebook.com" data-testid="facebook">
          <FaFacebookSquare />
        </Icon>
        <Icon to="twitter.com" data-testid="twitter">
          <FaTwitterSquare />
        </Icon>
        <Icon to="google.com" data-testid="google">
          <FaGooglePlusSquare />
        </Icon>
        <Icon to="linkedin.com" data-testid="linkedin">
          <FaLinkedin />
        </Icon>
      </IconsDiv>
    </Container>
  )
}

export default Header
