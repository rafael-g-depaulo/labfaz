import { User } from '@labfaz/entities'
import SignUp from '.'

export default {
  title: 'Components/SignUp',

  parameters: {
    component: SignUp,
  },
}

export const signUp = () => (
  <SignUp button_type="button" token='' data={{} as User}/>
)

signUp.story = {
  name: 'SignUp',
}
