import React, { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from 'Components/Profile/Mobile'
import Web from 'Components/Profile/Web'

export const Profile: FC = () => {

  if(useMobile()) return <Mobile /> 
  else return <Web />
}

export default Profile
