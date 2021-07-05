import React, { FC } from "react"

import { usePersonExample } from "Api/PeopleExample"

import Loading from "Components/Loading"
import Display from "./Display"

export interface ShowPersonProps {
  id: number  
}

export const ShowPerson: FC<ShowPersonProps> = ({
  id,
}) => {
  const result = usePersonExample(id)

  // if is loading data
  if (result.isLoading) return <Loading />

  // if there were any errors
  if (result.error) return <div>error: { result.error.message }</div>

  // if reached here, we know that data is loaded and there is no error
  const person = result.data

  return (
    <Display person={person}/>
  )
}

export default ShowPerson
