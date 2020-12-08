import React, { FC } from "react"

import { SingletonExample } from "Api/SingletonExample"

export interface DisplayProps {
  data: SingletonExample
}

export const Display: FC<DisplayProps> = ({
  data
}) => {
  const { text, image } = data
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

export default Display
