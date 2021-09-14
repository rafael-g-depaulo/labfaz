import React, { FC } from 'react'

import Profile from 'Components/Profile'
import Wireframe from 'Components/Wireframe'
import { User } from 'Context/CurrentUser'

interface DisplayProps {
  data: User
}

export const Display: FC<DisplayProps> = ({ data }) => {
  return (
    <>
      <Wireframe>
        <Profile data={data} personalProfilePage={false} />
      </Wireframe>
    </>
  )
}

export default Display
