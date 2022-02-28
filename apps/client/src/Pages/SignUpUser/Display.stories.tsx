import SignUp from './Display'

export default {
  title: 'Pages/SignUp',

  parameters: {
    component: SignUp,
  },
}

export const Default = () => <SignUp button_type="button" />

Default.story = {
  name: 'default',
}
