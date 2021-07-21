import { HelloExample } from "Api/HelloApiExample"
import React, { FC } from "react"
import CoursesPresentation from "Components/CoursesPresentation"

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

      <CoursesPresentation />
    </div>
  )
}

export default Display
