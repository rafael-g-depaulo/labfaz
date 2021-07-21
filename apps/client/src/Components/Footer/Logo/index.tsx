import React, { FC } from 'react'
import { 
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaInstagramSquare
} from 'react-icons/fa'

import Logo from 'Components/Logo'
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
import { LogoContainer, Icon, IconContainer, Title } from './style'

interface LogoProps {
  data: SocialNetworksLabfaz
}

const LogoFooter: FC<LogoProps> = ({ data }) => {
  const { facebook, twitter, googlePlus, linkedin, instagram, youtube } = data
  return (
    <LogoContainer id="logo-container">
      <Logo color="black"/>
      <Title>Nossas redes e mídias</Title>
      <IconContainer>
        {
          !!youtube && youtube !== "" && 
          <Icon href={youtube} data-testid="youtube">
            <FaYoutubeSquare name="Youtube"/>
          </Icon>
        }
        {
          !!facebook && facebook !== "" &&
          <Icon href={facebook} data-testid="facebook">
            <FaFacebookSquare name="Facebook" />
          </Icon>
        }
        {
          !!twitter && twitter !== "" &&
          <Icon href={twitter} data-testid="twitter">
            <FaTwitterSquare name="Twitter" />
          </Icon>
        }
        {
          !!instagram && instagram !== "" &&
          <Icon href={instagram} data-testid="instagram">
            <FaInstagramSquare name="Instagram"/>
          </Icon>
        }
        {
          !!googlePlus && googlePlus !== "" &&
          <Icon href={googlePlus} data-testid="google">
            <FaGooglePlusSquare name="Google Plus" />
          </Icon>
        }
        {
          !!linkedin && linkedin !== "" &&
          <Icon href={linkedin} data-testid="linkedin">
            <FaLinkedin name="Linkedin" />
          </Icon>
        }
      </IconContainer>
    </LogoContainer >
  )
}

export default LogoFooter;
