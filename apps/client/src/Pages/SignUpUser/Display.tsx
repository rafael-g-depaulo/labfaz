import { FC } from 'react'

import { LoginContainer } from './style'
import { SignUp } from 'Components/SignUp'
import Wireframe from 'Components/Wireframe'
import useMobile from 'Hooks/useMobile'

export interface DisplayProps {
  button_type?: "submit" | "button" | "reset"
}

export const Display: FC<DisplayProps> = ({ button_type = 'submit' }) => {
  return (
    <>
      {useMobile() ? (
        <>
          <LoginContainer>
            <SignUp button_type={button_type} />
          </LoginContainer>
        </>
      ) : (
        <Wireframe>
          <LoginContainer>
            <SignUp button_type={button_type} />
          </LoginContainer>
        </Wireframe>
      )}
    </>
  )
}

export default Display
