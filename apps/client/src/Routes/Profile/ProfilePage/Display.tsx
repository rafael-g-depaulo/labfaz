import React, { FC } from 'react'

import Profile from 'Components/Profile'
import Wireframe from 'Components/Wireframe'

export const Display: FC = () => {
  return (
    <>
      <Wireframe>
        <Profile />
      </Wireframe>
    </>
  )
}

export default Display
