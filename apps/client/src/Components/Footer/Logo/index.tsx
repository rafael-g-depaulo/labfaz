import React, { FC } from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'

import { LogoContainer } from './style'

interface LogoProps {
  youtubeUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  googleUrl?: string
  linkedinUrl?: string
}

const Logo: FC<LogoProps> = ({
  youtubeUrl = "https://www.youtube.com",
  facebookUrl = "https://www.facebook.com",
  twitterUrl = "https://www.twitter.com",
  googleUrl = "https://www.google.com",
  linkedinUrl = "https://www.linkedin.com"
}) => {
  return (
    <LogoContainer id="logo-container">
      <img src="logo192.png" alt="Logo" />
      <span>Nossas redes e midias</span>
      <div>
        <a href={youtubeUrl}>
          <FaYoutubeSquare size="20px" name="Youtube" />
        </a>
        <a href={facebookUrl}>
          <FaFacebookSquare size="20px" />
        </a>
        <a href={twitterUrl}>
          <FaTwitterSquare size="20px" />
        </a>
        <a href={googleUrl}>
          <FaGooglePlusSquare size="20px" />
        </a >
        <a href={linkedinUrl}>
          <FaLinkedin size="20px" />
        </a >
      </div >
    </LogoContainer >
  )
}

export default Logo;
