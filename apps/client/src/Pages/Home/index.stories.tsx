import Home from '.'

export default {
  title: 'Pages/Home',

  parameters: {
    component: Home,
  },
}

export const Default = () => <Home />

Default.story = {
  name: 'default',
}
