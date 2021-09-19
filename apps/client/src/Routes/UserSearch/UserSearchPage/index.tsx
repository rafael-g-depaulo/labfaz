import React, { FC } from "react"

import Display from "./Display"
import { useUserSearch } from "Api/UserSeatch"

export const UserSearchPage: FC = () => {

  const users = useUserSearch({
    LBTQOnly: false,
    ceacOnly: false,
    cpnjOnly: false,
    drtOnly: false,
    meiOnly: false,
    nonMenOnly: false,
    area: "",
    city: "",
    nameOrProfession: "",
  })
  console.log(users)

  return (
    <Display />
  )
}

export default UserSearchPage
