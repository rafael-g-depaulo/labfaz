import React, { FC } from 'react'

import LogoFooter from '../Logo'
import Navigation from '../Navigation'
import NewsLetter from '../Newsletter'
import Contact from '../Contact'

import { FooterContainer } from './style'

import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

interface Props {
  data: SocialNetworksLabfaz
}

const Web: FC<Props> = ({ data }) => {

  return (
    <FooterContainer>
      <div className="miniContainer">
        <LogoFooter data={data} />
        <Navigation />
        <NewsLetter />
        <Contact phone={data.phone} email={data.email}/>
      </div>
    </FooterContainer>
  )
}

export default Web;
