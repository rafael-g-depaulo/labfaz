import { FC } from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaInstagramSquare
}from 'react-icons/fa'

import Logo from 'Components/Logo'
import { Container, Icon, IconsDiv } from './style'
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

export interface Props {
  data: SocialNetworksLabfaz
}

export const Header: FC<Props> = ({ data }) => {

  const {facebook, twitter, linkedin, googlePlus, instagram} = data
  return (
    <Container>
      <Logo />
      <IconsDiv>
        {
          !!facebook && facebook !== "" &&
          <Icon href={facebook} data-testid="facebook">
            <FaFacebookSquare />
          </Icon>
        }
        {
          !!twitter && twitter !== "" &&
          <Icon href={twitter} data-testid="twitter">
            <FaTwitterSquare />
          </Icon>
        }
        {
          !!instagram && instagram !== "" &&
          <Icon href={instagram} data-testid="instagram">
            <FaInstagramSquare />
          </Icon>
        }
        {
          !!googlePlus && googlePlus !== "" &&
          <Icon href={googlePlus} data-testid="google">
            <FaGooglePlusSquare />
          </Icon>
        }
        {
          !!linkedin && linkedin !== "" &&
          <Icon href={linkedin} data-testid="linkedin">
            <FaLinkedin />
          </Icon>
        }
      </IconsDiv>
    </Container>
  )
}

export default Header
