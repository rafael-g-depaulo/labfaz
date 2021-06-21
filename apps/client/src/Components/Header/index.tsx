import React, { FC } from 'react'

import useWidth from 'Hooks/useWidth'
import Mobile from 'Components/Header/Mobile'
import Web from 'Components/Header/Web'

export const Header: FC = () => {
  const width = useWidth()

  if (width <= 660) return <Mobile />
  
  else return <Web/>
}

export default Header
