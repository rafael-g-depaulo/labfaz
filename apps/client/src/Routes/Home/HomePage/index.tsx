import React, { FC, useEffect } from "react"

import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

import ReactGa from 'react-ga';

export const HomePage: FC = () => {

  useEffect(() => {
    ReactGa.pageview('HomePage')
  }, [])

  const result = useHelloExample()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  return (
    <Display data={result.data}/>
  )
}

export default HomePage
