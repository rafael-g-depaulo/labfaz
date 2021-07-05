import React, { FC } from "react"

import { useHomepage } from "Api/Homepage";
import Loading from "Components/Loading";
import Display from "./Display";

export const CoursesPresentation: FC = () => {

  const result = useHomepage()

  if (result.isLoading) return <Loading />
  if (result.error) return <div>error: {result.error.message}</div>

  return (
    <Display texts={result.data}/>
  )
}

export default CoursesPresentation;
