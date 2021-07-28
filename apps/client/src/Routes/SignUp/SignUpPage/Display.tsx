import React, { FC } from "react"

import Header from "Components/Header"

import { LoginContainer } from "./style"
import { SignUp } from "Components/SignUp"

export const Display: FC = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <SignUp buttonType="submit"/>
      </LoginContainer>
    </>
  )
}

export default Display
