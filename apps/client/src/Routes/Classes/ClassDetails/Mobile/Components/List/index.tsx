import React, { FC } from 'react'

import { Li, Ul } from "./styles"

interface ListProps {
  data: string[]
}

export const List: FC<ListProps> = ({ data }) => {

  return (
    <Ul>
      {
        data.map((item) => (
          <Li>
            {item}
          </Li>
        ))
      }
    </Ul>
  )
}

export default List
