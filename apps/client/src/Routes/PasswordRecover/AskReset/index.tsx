import React, { FC } from 'react'

import Display from "./Display"

import { useRecoverPassImage } from "Api/RecoverPassImage"
import LoadingFullPage from 'Components/LoadingFullPage'
import Error from "Pages/Error"

export const AskResetPage: FC = () => {

  const response = useRecoverPassImage()

  if (response.isLoading) return <LoadingFullPage />
  if (response.error) return <Error errorMessage={response.error.response?.statusText} errorStatus={response.error.response?.status} />


  return(
    <Display image={response.data}/>
  )
}

export default AskResetPage
