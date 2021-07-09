import React, { FC } from "react"

import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"
import Header from 'Components/Header'
import Banner from 'Components/Banner'

export const HomePage: FC = () => {

  const result = useHelloExample()

  if (result.isLoading) return <Loading />
  if (result.error) return <div><Header /> <Banner title="LABFAZ"
  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
    ligula nibh, nec interdum nunc maximus at."
  hrefKnowMore="/about"/> error: {result.error.message}</div>

  return (
    <Display data={result.data}/>
  )
}

export default HomePage
