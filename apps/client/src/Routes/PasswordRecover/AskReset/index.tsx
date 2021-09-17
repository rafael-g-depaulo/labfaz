import React, { FC } from 'react'

import Display from "./Display"

import { useRecoverPassImage } from "Api/RecoverPassImage"
import LoadingFullPage from 'Components/LoadingFullPage'

export const AskResetPage: FC = () => {

  const response = useRecoverPassImage()

  if (response.isLoading) return <LoadingFullPage />
  if (response.error) return <div>error: {response.error.message}</div>


  return(
    <Display image={response.data}/>
  )
}

export default AskResetPage
