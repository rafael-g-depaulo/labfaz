import React, { FC } from "react"

import { useSingletonExample } from "Api/SingletonExample"
import Loading from "Components/Loading"

export const ShowSingleton: FC = () => {

  const result = useSingletonExample()

  if (result.error) return <div>error: { result.error.message }</div>

  if (result.isLoading) return <Loading />

  const { text, image } = result.data

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
