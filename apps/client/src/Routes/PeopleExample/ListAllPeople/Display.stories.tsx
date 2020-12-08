import React from 'react'
import { storiesOf } from '@storybook/react'

import ListAllPeople from './Display'
import { PersonExample } from 'Api/PeopleExample'

const peopleTest: PersonExample[] = [
  { name: "Maria", age: 17 },
  { name: "João", age: 12 },
]
// const a: StoryFnReactReturnType | null = null

storiesOf("Pages/ListAllPeople", module)
  .addParameters({ component: ListAllPeople })
  .add("empty list", () => <ListAllPeople people={[]}/>)
  .add("non-empty list", () => <ListAllPeople people={peopleTest}/>)
  // .addParameters({ docs: { page: null } })
  // .addParameters({ docs: { page: <div>fsdfgggggggggggggggggggg</div> }})
