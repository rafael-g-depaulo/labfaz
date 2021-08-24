import React, { FC } from "react"

import { useSingletonExample } from "Api/SingletonExample"
import LoadingFullPage from "Components/LoadingFullPage"

export const ShowSingleton: FC = () => {

  const result = useSingletonExample()

  if (result.error) return <div>error: { result.error.message }</div>

  if (result.isLoading) return <LoadingFullPage />

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
