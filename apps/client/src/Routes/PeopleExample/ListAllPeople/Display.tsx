import React, { FC } from "react"
import { PersonExample } from "Api/PeopleExample"


export interface DisplayProps {
  people: PersonExample[],
}

export const Display: FC<DisplayProps> = ({
  people,
}) => {
  return (
    <div>
      <ul>
        {people.map(person => 
          <li key={`${person.name}.${person.age}`}>
            <pre>{JSON.stringify(person, null, 2)}</pre>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Display
