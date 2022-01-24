import Login from '.'

export default {
  title: 'Pages/Login',

  parameters: {
    component: Login,
  },
}

export const Default = () => <Login />

Default.story = {
  name: 'default',
}
