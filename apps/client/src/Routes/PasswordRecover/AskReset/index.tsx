import React, { FC } from 'react'

import Loading from "Components/Loading"
import Display from "./Display"

import { useRecoverPassImage } from "Api/RecoverPassImage"

export const AskResetPage: FC = () => {

  const response = useRecoverPassImage()

  if (response.isLoading) return <Loading />
  if (response.error) return <div>error: {response.error.message}</div>


  return(
    <Display image={response.data}/>
  )
}

export default AskResetPage
