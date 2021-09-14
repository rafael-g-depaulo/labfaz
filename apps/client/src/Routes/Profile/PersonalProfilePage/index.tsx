import React, { FC } from 'react'

import { useCurrentUser } from 'Api/Profile'
import LoadingFullPage from 'Components/LoadingFullPage'
import Error from 'Pages/Error'

import Display from './Display'

export const ProfilePage: FC<{ token: string}> = ({ token }) => {

  const user = useCurrentUser(token)

  if (user.isLoading)
    return <LoadingFullPage />
  if (user.error)
    return <Error errorMessage={user.error.message} errorStatus={user.error.response?.status} />

  return <Display data={user.data} />
}

export default ProfilePage
