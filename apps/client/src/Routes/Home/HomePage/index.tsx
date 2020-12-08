import React, { FC } from "react"

import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

export const HomePage: FC = () => {

  const { data, error, isLoading } = useHelloExample()

  if (error) return <div>error: { error?.message ?? "" }</div>
  if (isLoading) return <Loading />

  return (
    <Display data={data!}/>
  )
}

export default HomePage
