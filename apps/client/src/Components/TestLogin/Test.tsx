import { CurrentUserContext } from "Context/CurrentUser"
import React, { FC, useContext } from "react"

export const Test: FC = () => {
  const { user } = useContext(CurrentUserContext)
  return (
    <div>user's email is {user?.email}</div>
  )
}

export default Test
