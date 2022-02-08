import { User } from '@labfaz/entities'

import Profile from './'
import Mobile from './Mobile'
import Web from './Web'

export default {
  title: 'Components/Profile',

  parameters: {
    component: Profile,
  },
}

export const profile = () => (
  <Profile personalProfilePage data={{} as User} />
)
profile.story = {
  name: 'profile',
}

export const web = () => (
  <Web personalProfilePage={false} data={{} as User} />
)
web.story = {
  name: 'web',
}

export const mobile = () => (
  <Mobile PersonalProfilePage={false} data={{} as User} />
)
mobile.story = {
  name: 'mobile',
}
