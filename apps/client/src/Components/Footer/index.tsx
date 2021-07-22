import React, { FC } from 'react'

import Web from './Web'
import Mobile from './Mobile'
import { useSocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
import Loading from 'Components/Loading'
import useMobile from 'Hooks/useMobile'

const Footer: FC = () => {
  const result = useSocialNetworksLabfaz()
  const width = useMobile()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  if(width) return <Mobile data={result.data}/>
  else return <Web data={result.data} />
}

export default Footer;
