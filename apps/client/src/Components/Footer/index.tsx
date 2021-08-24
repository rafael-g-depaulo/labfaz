import React, { FC } from 'react'

import { SocialNetworksLabfaz, useSocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
import Composer from './Composer'

const defaultData: SocialNetworksLabfaz = { email: "labfaz@labfaz.com.br", phone: "61999999999" }

const Footer: FC = () => {
  const result = useSocialNetworksLabfaz()

  if (result.isLoading) return <Composer data={defaultData} />
  if (result.error) return <div>error: {result.error.message}</div>
  return <Composer data={result.data} />
}

export default Footer;
