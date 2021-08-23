import React, { FC } from "react"

import Header from "Components/Header"
import { Login, LoginComponentProps } from "Components/Login"

import { LoginContainer } from "./style"

export const Display: FC<LoginComponentProps> = ({
  onSubmit = () => { console.log("submitted form" )},
}) => {
  return (
    <>
      <Header />
      <LoginContainer>
        <Login onSubmit={onSubmit}/>
      </LoginContainer>
    </>
  )
}

export default Display
