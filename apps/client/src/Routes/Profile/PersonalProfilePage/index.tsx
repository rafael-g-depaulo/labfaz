import LoadingFullPage from 'Components/LoadingFullPage'
import { CurrentUserContext } from 'Context/CurrentUser'
import React, { FC, useContext } from 'react'

import Display from './Display'

export const ProfilePage: FC = () => {

  const { user } = useContext(CurrentUserContext)

  if ( !user ) return <LoadingFullPage />;

  return <Display data={user} />
}

export default ProfilePage
