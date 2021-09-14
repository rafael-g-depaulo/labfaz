import { useProfile } from 'Api/Profile'
import LoadingFullPage from 'Components/LoadingFullPage'
import { CurrentUserContext } from 'Context/CurrentUser'
import Error from 'Pages/Error'
import React, { FC, useContext } from 'react'

import Display from './Display'

interface UserProfilePageProps {
  id: string
}

export const ProfilePage: FC<UserProfilePageProps> = ({ id }) => {

  const { token } = useContext(CurrentUserContext)
  
  const user = useProfile(id, token!)

  if (user.isLoading || user.isLoading) return <LoadingFullPage />;

  if(!user.data) return (
    <Error
      errorStatus={user.error.response?.status}
      errorMessage={user.error.response?.statusText}
    />
  );

  return <Display data={user.data} />
}

export default ProfilePage
