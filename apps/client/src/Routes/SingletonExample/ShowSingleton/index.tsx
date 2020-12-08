import React, { FC } from "react"

import { useSingletonExample } from "Api/SingletonExample"
import Loading from "Components/Loading"

export const ShowSingleton: FC = () => {

  const { data, error, isLoading } = useSingletonExample()

  if (error) return <div>error: { error?.message ?? "" }</div>

  if (isLoading) return <Loading />

  const { text, image} = data!
  return (
    <div>
      <p>{text}</p>

      <img
        src={image.url}
        alt={image.alternativeText}
      />
    </div>
  )
}

export default ShowSingleton
