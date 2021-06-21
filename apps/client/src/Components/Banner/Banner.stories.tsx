import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';

import Banner from './'

storiesOf("Components/Banner", module)
  .addParameters({ component: Banner })
  .add("banner", () =>
    <BrowserRouter>
      <Banner
        title="LABFAZ"
        subtitle="Testando"
        height={15}
        hrefKnowMore="/about"
      />
    </BrowserRouter>
  )
