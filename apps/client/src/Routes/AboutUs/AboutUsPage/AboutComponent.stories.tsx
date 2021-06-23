import React from 'react'
import { storiesOf } from "@storybook/react"

import About from "./AboutComponent"

storiesOf("Components/AboutUs", module)
  .addParameters({ component: About })
  .add("Default", () => <About data={[{
    img: "img.icons8.com/ios/50/000000/k.png",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quis ipsum suspendisse ultrices gravida. Diam in arcu cursus euismod quis viverra nibh. Massa sapien faucibus et molestie ac feugiat sed. Tortor vitae purus faucibus ornare suspendisse."
  },
  {
    img: "img.icons8.com/ios/50/000000/k.png",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quis ipsum suspendisse ultrices gravida. Diam in arcu cursus euismod quis viverra nibh. Massa sapien faucibus et molestie ac feugiat sed. Tortor vitae purus faucibus ornare suspendisse. "
  },
  {
    img: "img.icons8.com/ios/50/000000/k.png",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quis ipsum suspendisse ultrices gravida. Diam in arcu cursus euismod quis viverra nibh. Massa sapien faucibus et molestie ac feugiat sed. Tortor vitae purus faucibus ornare suspendisse. "
  }

]}
  
  />)
