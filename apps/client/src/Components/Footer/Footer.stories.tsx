import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Footer from 'Components/Footer'

storiesOf("Components/Footer", module)
  .addParameters({ component: Footer })
  .add("footer", () => <BrowserRouter><Footer /></BrowserRouter>)
