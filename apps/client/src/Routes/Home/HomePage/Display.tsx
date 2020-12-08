import { HelloExample } from "Api/HelloApiExample"
import React, { FC } from "react"


export interface DisplayProps {
  data: HelloExample
}

export const Display: FC<DisplayProps> = ({
  data,
}) => {
  return (
    <div>
      <p>home page</p>

      <p>the following message was recieved from the main server api:</p>
      <pre data-testid="data-json">{JSON.stringify(data!, null, 2)}</pre>
    </div>
  )
}

export default Display
