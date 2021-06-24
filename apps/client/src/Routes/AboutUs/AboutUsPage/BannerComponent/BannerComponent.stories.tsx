import React from 'react'
import { storiesOf } from '@storybook/react'

import Banner from "./"

const banner_data = "We are labfaz!"

storiesOf("Components/BannerComponent", module)
  .addParameters({ component: Banner})
  .add("Default", () => <Banner subtitle={banner_data} />)
