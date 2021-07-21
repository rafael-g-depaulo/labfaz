import React, { FC } from 'react'

import LogoFooter from '../Logo'
import Contact from '../Contact'
import { FooterContainer } from './style'
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

interface Props {
  data: SocialNetworksLabfaz
}

const Mobile: FC<Props> = ({ data }) => {

  return (
    <FooterContainer>
      <div className="miniContainer">
        <LogoFooter data={data} />
        <Contact data={data} />
      </div>
    </FooterContainer>
  )
}

export default Mobile;
