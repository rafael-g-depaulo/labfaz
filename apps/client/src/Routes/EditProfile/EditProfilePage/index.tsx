import { useCurrentUser } from 'Api/Profile'
import LoadingFullPage from 'Components/LoadingFullPage'
import Error from 'Pages/Error'
import React, { FC } from 'react'

import Display from './Display'

export const EditProfile: FC<{ token: string }> = ({ token }) => {
  const user = useCurrentUser(token)

  if (user.isLoading) return <LoadingFullPage />
  if (user.error)
    return (
      <Error
        errorMessage={user.error.message}
        errorStatus={user.error.response?.status}
      />
    )

  return <Display button_type="submit" data={user.data} token={token} />
}

export default EditProfile
