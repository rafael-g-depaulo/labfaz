import React, { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from './Mobile'
import Web from './Web'
import { useSocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
import LoadingFullPage from 'Components/LoadingFullPage'

export const Contruction: FC = () => {
  const result = useSocialNetworksLabfaz()
  const width = useMobile()

  if (result.isLoading) return <LoadingFullPage />
  if (result.error) return <div>error: {result.error.message}</div>

  if(width) return <Mobile data={result.data}/>
  else return <Web data={result.data!}/>
}

export default Contruction
