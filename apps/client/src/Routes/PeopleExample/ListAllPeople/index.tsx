import React, { FC } from "react"

import { usePeopleExample } from "Api/PeopleExample"

import Loading from "Components/Loading"
import Display from "./Display"

export const ListAllPeople: FC = () => {

  const result = usePeopleExample()

  // if is loading data
  if (result.isLoading) return <Loading />

  // if there were any errors
  if (result.error) return <div>error!</div>

  // if reached here, we know that data is loaded and there is no error
  const people = result.data

  return (
    <Display people={people} />
  )
}

export default ListAllPeople
