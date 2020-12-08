import React, { FC } from "react"
import { PersonExample } from "Api/PeopleExample"

export interface DisplayProps {
  person: PersonExample,
}

export const Display: FC<DisplayProps> = ({
  person,
}) => {
  return (
    <div>
      <p>hello, {person.name}, i see you're {person.age}</p>
    </div>
  )
}

export default Display
