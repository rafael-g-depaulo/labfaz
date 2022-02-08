import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

import Construction from '.'
import Web from './Web'
import Mobile from './Mobile'

const data: SocialNetworksLabfaz = {
  email: "test@test.com",
  phone: "619999999",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  googlePlus: "https://googlePlus.com",
}

export default {
  title: 'Pages/Construction',

  parameters: {
    component: Construction,
  },
}

export const responsive = () => (
  <Construction />
)
responsive.story = {
  name: "responsive"
}

export const web = () => (
  <Web data={data} />
)
web.story = {
  name: "web"
}

export const mobile = () => (
  <Mobile data={data} />
)
mobile.story = {
  name: "mobile"
}
