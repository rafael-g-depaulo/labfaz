import React, { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from './Mobile'
import Web from './Web'

export const Contruction: FC = () => {

  if(useMobile()) return <Mobile />
  else return <Web />
}

export default Contruction
