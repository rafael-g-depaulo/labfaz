import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Web from './'

storiesOf("Components/Header", module)
  .addParameters({ component: Web })
  .add("web", () => <BrowserRouter ><Web /></BrowserRouter>)
