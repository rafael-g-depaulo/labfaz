import Register from '.'

export default {
  title: 'Pages/Register',

  parameters: {
    component: Register,
  },
}

export const Default = () => <Register />

Default.story = {
  name: 'default',
}
