import { Login } from "."

export default {
  title: 'Components/Login',

  parameters: {
    component: Login,
  },
}

export const login = () => (
  <Login onSubmit={() => {}}/>
)

login.story = {
  name: 'Login',
}
