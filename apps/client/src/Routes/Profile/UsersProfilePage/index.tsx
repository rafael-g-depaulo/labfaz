import { useUser } from 'Api/Profile'
import LoadingFullPage from 'Components/LoadingFullPage'
import Error from 'Pages/Error'
import React, { FC } from 'react'

import Display from './Display'

interface UserProfilePageProps {
  id: string
  token: string
}

export const ProfilePage: FC<UserProfilePageProps> = ({ id, token }) => {

  const user = useUser(id, token)

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
