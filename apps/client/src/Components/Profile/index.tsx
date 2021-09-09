import React, { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from 'Components/Profile/Mobile'
import Web from 'Components/Profile/Web'

interface ProfileProps {
  data: object
}

export const Profile: FC<ProfileProps> = ({ data }) => {
  if (useMobile()) return <Mobile data={data} />
  else return <Web data={data}/>
}

export default Profile
