import React, { FC } from "react"

import { useHomepage } from "Api/Homepage";
import Loading from "Components/Loading";
import Display from "./Display";

export const CoursesPresentation: FC = () => {

  const { data, error, isLoading } = useHomepage();

  if (error) return <div>error: { error?.message ?? "" }</div>
  if (isLoading) return <Loading />

  return (
    <Display texts={data!}/>
  )
}

export default CoursesPresentation;
