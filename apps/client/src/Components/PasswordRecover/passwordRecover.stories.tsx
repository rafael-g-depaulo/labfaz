import RecoverForm from '.'
import PasswordChange from "./passwordChange"

const token = "aksjdkasjhdkahdkashdkasjdhaskjdhakjdhksjhda"

export default {
  title: 'Components/Recover',

  parameters: {
    component: RecoverForm,
  },
}

export const recover = () => (
  <RecoverForm />
)
recover.story = {
  name: 'recover',
}

export const confirmedEmail = () => (
  <PasswordChange token={token} />
)
confirmedEmail.story = {
  name: 'confirmed email',
}
