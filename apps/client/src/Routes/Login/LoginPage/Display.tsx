import React, { FC } from "react"

import { Login, LoginComponentProps } from "Components/Login"

import { LoginContainer } from "./style"
import Wireframe from "Components/Wireframe"

export const Display: FC<LoginComponentProps> = ({
  onSubmit = () => { console.log("submitted form" )},
}) => {
  return (
    <Wireframe>    
      <LoginContainer>
        <Login onSubmit={onSubmit}/>
      </LoginContainer>
    </Wireframe>
  )
}

export default Display
