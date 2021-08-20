import React from 'react'
import { storiesOf } from '@storybook/react'

import YoutubePlayer from '.'

storiesOf("Components/Youtube Player", module)
  .addParameters({ component: YoutubePlayer })
  .add("default url", () => <YoutubePlayer href="https://www.youtube.com/watch?v=j7JWHrZNvjY" />)
  .add("share url", () => <YoutubePlayer href="https://youtu.be/j7JWHrZNvjY" />)
