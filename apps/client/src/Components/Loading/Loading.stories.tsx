import { storiesOf } from '@storybook/react'

import Loading from './'
import LoadingTest from './LoadingTest'

storiesOf("Components/Loading", module)
  .addParameters({ component: Loading })
  .add("loading", () => <Loading />)

storiesOf("Components/Loading", module)
  .addParameters({ component: LoadingTest })
  .add("loadingTest", () => <LoadingTest />)
