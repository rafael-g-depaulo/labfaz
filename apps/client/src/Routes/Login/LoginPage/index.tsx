import React, { FC, useCallback } from "react"

import Display from "./Display"

export const LoginPage: FC = () => {

  const handleSubmit = useCallback(() => {
  }, [])

  return (
    <Display onSubmit={handleSubmit}/>
  )
}

export default LoginPage
