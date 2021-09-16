import React, { FC } from 'react'

import { LoginContainer } from './style'
import { SignUp } from 'Components/SignUp'
import Wireframe from 'Components/Wireframe'
import useMobile from 'Hooks/useMobile'

interface DisplayProps {
  button_type: "submit" | "button" | "reset"
}

export const Display: FC<DisplayProps> = ({ button_type }) => {
  return (
    <>
      {useMobile() ? (
        <>
          <LoginContainer>
            <SignUp button_type={button_type ? button_type : 'submit'} />
          </LoginContainer>
        </>
      ) : (
        <Wireframe>
          <LoginContainer>
            <SignUp button_type={button_type ? button_type : 'submit'} />
          </LoginContainer>
        </Wireframe>
      )}
    </>
  )
}

export default Display
