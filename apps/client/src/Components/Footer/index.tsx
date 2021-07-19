import React, { FC } from 'react'

import Logo from './Logo'
import Navigation from './Navigation'
import NewsLetter from './Newsletter'
import Contact from './Contact'


import { FooterContainer } from './style'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Logo />
      <Navigation />
      <NewsLetter />
      <Contact phoneNumber="(61) 91234-5678" email="contato@labfaz.com.br" />
    </FooterContainer>
  )
}

export default Footer;
