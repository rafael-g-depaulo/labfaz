import Header from '.'
import Web from "./Web"
import Mobile from "./Mobile"

export default {
  title: 'Components/Header',

  parameters: {
    component: Header,
  },
}

export const header = () => (
  <Header />
)

header.story = {
  name: 'header',
}

export const web = () => (
  <Web />
)

web.story = {
  name: 'web',
}

export const mobile = () => (
  <Mobile />
)

mobile.story = {
  name: 'mobile',
}
