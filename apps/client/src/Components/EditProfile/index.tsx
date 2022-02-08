import { FC } from 'react'

import useMobile from 'Hooks/useMobile'
import { Mobile } from './Mobile'
import { Web } from './Web'
import { User } from '@labfaz/entities'

interface SingUpProps {
  button_type: "submit" | "button" | "reset"
  data: User
  token: string
}

export const EditProfile: FC<SingUpProps> = ({ button_type, data, token }) => {
  if (useMobile()) return <Mobile buttonType={button_type ? button_type : 'submit'} data={data} token={token} />
  else return <Web buttonType={button_type ? button_type : 'submit'} data={data} token={token} />
}

export default EditProfile
