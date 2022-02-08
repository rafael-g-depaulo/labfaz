import { storiesOf } from '@storybook/react'

import { CurrentUserProvider } from 'Context/LoggedUserToken'

import { Login } from './'

storiesOf('Components/Login', module)
  .addParameters({ component: Login })
  .add('input', () => (
    <CurrentUserProvider>
      <Login onSubmit={() => {}}/>
    </CurrentUserProvider>
  ))
