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
        <Icon to={{ pathname: "https://www.facebook.com" }} target="_blank" data-testid="facebook">
          <FaFacebookSquare />
        </Icon>
        <Icon to={{ pathname: "https://www.twitter.com" }} target="_blank" data-testid="twitter">
          <FaTwitterSquare />
        </Icon>
        <Icon to={{ pathname: "https://www.google.com" }} target="_blank" data-testid="google">
          <FaGooglePlusSquare />
        </Icon>
        <Icon to={{ pathname: "https://linkedin.com" }} target="_blank" data-testid="linkedin">
          <FaLinkedin />
        </Icon>
      </IconsDiv>
    </Container>
  )
}

export default Header
