import React, { FC } from 'react'

import Web from './Web'
import Mobile from './Mobile'
// import { useSocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
// import Loading from 'Components/Loading'
import useMobile from 'Hooks/useMobile'

const Footer: FC = () => {
  // const result = useSocialNetworksLabfaz()
  const width = useMobile()

  // if (result.isLoading) return <Loading />
  // if (result.error) return <div>error: {result.error.message}</div>

  const data = {
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    googlePlus: "https://www.google.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    ddd: 61,
    phone: 912345678,
    email: "contato@labfaz.com.br"
  }

  if(width) return <Mobile data={data}/>
  else return <Web data={data} />
}

export default Footer;
