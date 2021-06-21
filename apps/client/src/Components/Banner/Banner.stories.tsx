import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';

import Banner from './'

storiesOf("Components/Banner", module)
  .addParameters({ component: Banner })
  .add("bannerCenter", () =>
    <BrowserRouter>
      <Banner
        title="LABFAZ"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          ligula nibh, nec interdum nunc maximus at."
        height={15}
        hrefKnowMore="/about"
      />
    </BrowserRouter>
  )
  .add("bannerLeft", () => 
    <BrowserRouter>
      <Banner
        title="Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        align="left"
        height={7}
      />
    </BrowserRouter>
  )
