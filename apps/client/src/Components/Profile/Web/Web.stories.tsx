import { User } from '@labfaz/entities'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Web from './'
// import { User } from '@labfaz/entities'

storiesOf('Components/Profile', module)
  .addParameters({ component: Web })
  .add('web', () => (
    <BrowserRouter>
      <Web personalProfilePage={false} data={{} as User} />
    </BrowserRouter>
  ))
