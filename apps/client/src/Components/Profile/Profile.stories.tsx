import { User } from '@labfaz/entities'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Profile from './'

storiesOf("Components/Header", module)
  .addParameters({ component: Profile })
  .add("profile", () => <BrowserRouter ><Profile personalProfilePage data={{} as User} /></BrowserRouter>)
