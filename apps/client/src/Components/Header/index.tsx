import { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from 'Components/Header/Mobile'
import Web from 'Components/Header/Web'

export const Header: FC = () => {

  if(useMobile()) return <Mobile /> 
  else return <Web />
}

export default Header
