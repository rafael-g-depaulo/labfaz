import Logo from './'

export default {
  title: 'Components/Logo',

  parameters: {
    component: Logo,
  },
}

export const logo = () => (
  <Logo />
)

logo.story = {
  name: 'Logo',
}
