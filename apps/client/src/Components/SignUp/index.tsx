import { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import { Mobile } from './Mobile'
import { Web } from './Web'

export interface SingUpProps {
  button_type: "submit" | "button" | "reset"
}

export const SignUp: FC<SingUpProps> = ({ button_type }) => {
  if (useMobile()) return <Mobile buttonType={button_type ? button_type : 'submit'} />
  else return <Web buttonType={button_type ? button_type : 'submit'} />
}

export default SignUp
