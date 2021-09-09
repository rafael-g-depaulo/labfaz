import React, { FC } from 'react'

import Profile from 'Components/Profile'
import Wireframe from 'Components/Wireframe'

interface DisplayProps {
  data: object
}

export const Display: FC<DisplayProps> = ({ data }) => {
  return (
    <>
      <Wireframe>
        <Profile data={data} />
      </Wireframe>
    </>
  )
}

export default Display
