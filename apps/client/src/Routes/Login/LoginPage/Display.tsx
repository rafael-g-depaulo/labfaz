import React, { FC } from "react"

import Header from "Components/Header"
import { Login } from "Components/Login"

import { LoginContainer } from "./style"

export const Display: FC = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <Login />
      </LoginContainer>
    </>
  )
}

export default Display
