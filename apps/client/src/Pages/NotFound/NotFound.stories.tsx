import NotFound from './'
import Web from './Web'
import Mobile from './Mobile'

export default {
  title: 'Pages/NotFound',

  parameters: {
    component: NotFound,
  },
}

export const responsive = () => <NotFound />
responsive.story = {
  name: "responsive"
}
export const web = () => <Web />
web.story = {
  name: "web"
}
export const mobile = () => <Mobile />
mobile.story = {
  name: "mobile"
}
