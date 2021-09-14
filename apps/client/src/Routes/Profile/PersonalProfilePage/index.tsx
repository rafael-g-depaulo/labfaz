import LoadingFullPage from 'Components/LoadingFullPage'
import { CurrentUserTokenContext } from 'Context/LoggedUserToken'
import React, { FC, useContext } from 'react'

import Display from './Display'

export const ProfilePage: FC = () => {

  const { token } = useContext(CurrentUserTokenContext)

  // if ( !user ) return <LoadingFullPage />;

  // return <Display data={user} />
  return <div>temp</div>
}

export default ProfilePage
