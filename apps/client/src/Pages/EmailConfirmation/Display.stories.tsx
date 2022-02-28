import Display from "./Display"
import Mobile from "./Mobile"
import Web from "./Web"

export default {
  title: 'Pages/EmailConfirmation',

  parameters: {
    component: Display,
  },
}

export const responsive = () => (
  <Display />
)
responsive.story = {
  name: "responsive"
}

export const web = () => (
  <Web />
)
web.story = {
  name: "web"
}

export const mobile = () => (
  <Mobile />
)
mobile.story = {
  name: "mobile"
}
