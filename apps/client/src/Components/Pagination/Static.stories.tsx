import Pagination from './Static'

const items: string[] = Array.from({ length: 50 }, (_, k) => `test #${k}`)
 

export default {
  title: 'Components/Pagination/Static',

  parameters: {
    component: Pagination,
  },
}

export const empty = () => (
  <Pagination
    items={items}
  />
)
empty.story = {
  name: 'Logo',
}

export const staticRender = () => (
  <Pagination
    items={items}
  >
    <p>static rendering. though i don't see why you would ever do this</p>
  </Pagination>
)
staticRender.story = {
  name: 'Logo',
}


export const dinamic = () => (
  <Pagination
    items={items}
  >
    {items => <ul>{items.map(i => <li>{i}</li>)}</ul>}
  </Pagination>
)
dinamic.story = {
  name: 'Logo',
}
