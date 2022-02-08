import { storiesOf } from '@storybook/react'

import Pagination from './Static'

const items: string[] = Array.from({ length: 50 }, (_, k) => `test #${k}`)

storiesOf("Components/Pagination/Static", module)
  .addParameters({ component: Pagination })
  .add("empty", () => (
    <Pagination
      items={items}
    />
  ))
  .add("static render", () => (
    <Pagination
      items={items}
    >
      <p>static rendering. though i don't see why you would ever do this</p>
    </Pagination>
  ))
  .add("dinamic render", () => (
    <Pagination
      items={items}
    >
      {items => <ul>{items.map(i => <li>{i}</li>)}</ul>}
    </Pagination>
  ))
  