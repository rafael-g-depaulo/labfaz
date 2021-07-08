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
        <Icon to={{ pathname: facebook }} target="_blank" data-testid="facebook">
          <FaFacebookSquare />
        </Icon>
        <Icon to={{ pathname: twitter }} target="_blank" data-testid="twitter">
          <FaTwitterSquare />
        </Icon>
        <Icon to={{ pathname: googlePlus }} target="_blank" data-testid="google">
          <FaGooglePlusSquare />
        </Icon>
        <Icon to={{ pathname: linkedin }} target="_blank" data-testid="linkedin">
          <FaLinkedin />
        </Icon>
      </IconsDiv>
    </Container>
  )
}

export default Header
