import { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import Mobile from 'Components/Profile/Mobile'
import Web from 'Components/Profile/Web'
import { User } from '@labfaz/entities'
import { getTwitterHandle } from 'Utils/userUtils'

interface ProfileProps {
  data: User
  personalProfilePage: boolean
}

export const Profile: FC<ProfileProps> = ({ data, personalProfilePage }) => {
  const contact = data.artist.contact
  // contact.facebook
  // contact.instagram
  // contact.linkedin
  // contact.tiktok
  contact.twitter   = getTwitterHandle(contact.twitter ?? "")
  // contact.youtube

  data.artist.contact = contact
  if (useMobile())
    return <Mobile data={data} PersonalProfilePage={personalProfilePage} />
    
  else return <Web data={data} personalProfilePage={personalProfilePage} />
}

export default Profile
