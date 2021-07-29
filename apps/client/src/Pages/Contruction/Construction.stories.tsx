import React from 'react'
import { storiesOf } from '@storybook/react'

import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'

import Construction from './'
import Web from './Web'
import Mobile from './Mobile'

const data: SocialNetworksLabfaz = {
  email: "test@test.com",
  phone: "619999999",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  googlePlus: "https://googlePlus.com",
}

storiesOf("Pages/Construction", module)
  .addParameters({ component: Construction })
  .add("responsive", () => <Construction />)
  .add("web", () => <Web data={data} />)
  .add("mobile", () => <Mobile data={data} />)
