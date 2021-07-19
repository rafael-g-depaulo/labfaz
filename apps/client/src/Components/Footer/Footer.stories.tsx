import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from 'Components/Footer'

storiesOf("Components/Footer", module)
  .addParameters({ component: Footer })
  .add("footer", () => <Footer />)
