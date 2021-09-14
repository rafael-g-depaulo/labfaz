import React, { FC } from 'react'

import Profile from 'Components/Profile'
import Wireframe from 'Components/Wireframe'
import { User } from 'Context/LoggedUserToken'

interface DisplayProps {
  data: User
}

export const Display: FC<DisplayProps> = ({ data }) => {
  return (
    <>
      <Wireframe>
        <Profile data={data} personalProfilePage={true} />
      </Wireframe>
    </>
  )
}

export default Display
