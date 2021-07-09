import React, { FC } from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin
}from 'react-icons/fa'

import Logo from 'Components/Logo'
import { Container, Icon, IconsDiv } from './style'
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

export interface Props {
  data: SocialNetworksLabfaz
}

export const Header: FC<Props> = ({ data }) => {

  const {facebook, twitter, linkedin, googlePlus} = data!
  return (
    <Container>
      <Logo />
      <IconsDiv>
        <Icon href={facebook} data-testid="facebook">
          <FaFacebookSquare />
        </Icon>
        <Icon href={twitter } data-testid="twitter">
          <FaTwitterSquare />
        </Icon>
        <Icon href={googlePlus } data-testid="google">
          <FaGooglePlusSquare />
        </Icon>
        <Icon href={linkedin } data-testid="linkedin">
          <FaLinkedin />
        </Icon>
      </IconsDiv>
    </Container>
  )
}

export default Header
