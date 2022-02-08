import { CurrentUserProvider } from 'Context/LoggedUserToken'

import TestLogin from './'

export default {
  title: 'Components/TestLogin',

  parameters: {
    component: TestLogin,
  },
}

export const input = () => (
  <CurrentUserProvider>
    <TestLogin />
  </CurrentUserProvider>
)

input.story = {
  name: 'input',
}
