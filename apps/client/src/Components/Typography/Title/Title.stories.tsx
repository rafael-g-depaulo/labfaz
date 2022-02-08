import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Title } from './'

storiesOf("Components/Title", module)
  .addParameters({ component: Title })
  .add("title h1", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={1}
      />
    </BrowserRouter>)

  .add("Title h2", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={2}
      />
    </BrowserRouter>)

  .add("Title h3", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={3}
      />
    </BrowserRouter>)

  .add("Title h4", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={4}
      />
    </BrowserRouter>)

  .add("Title h5", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={5}
      />
    </BrowserRouter>)


  .add("Title h6", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={6}
      />
    </BrowserRouter>)
