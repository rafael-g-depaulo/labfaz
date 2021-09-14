import React, { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from 'Components/Profile/Mobile'
import Web from 'Components/Profile/Web'
import { User } from 'Context/LoggedUserToken'

interface ProfileProps {
  data: User
  personalProfilePage: boolean
}

export const Profile: FC<ProfileProps> = ({ data, personalProfilePage }) => {
  if (useMobile())
    return <Mobile data={data} PersonalProfilePage={personalProfilePage} />
    
  else return <Web data={data} personalProfilePage={personalProfilePage} />
}

export default Profile
