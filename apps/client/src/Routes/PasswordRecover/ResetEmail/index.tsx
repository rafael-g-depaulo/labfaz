import React, { FC } from 'react'

import Display from "./Display"

import { useRecoverPassImage } from "Api/RecoverPassImage"
import LoadingFullPage from 'Components/LoadingFullPage'

interface RecoverPasswordPageProps {
  token: string
}

export const RecoverPasswordPage: FC<RecoverPasswordPageProps> = ({ token }) => {

  const response = useRecoverPassImage()

  if (response.isLoading) return <LoadingFullPage />
  if (response.error) return <div>error: {response.error.message}</div>


  return(
    <Display image={response.data} token={token}/>
  )
}

export default RecoverPasswordPage
