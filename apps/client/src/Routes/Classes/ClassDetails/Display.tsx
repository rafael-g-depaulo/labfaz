import React, { FC } from 'react'

import { Course } from "Api/Courses"

interface DisplayProps {
  course: Course
}

export const Display: FC<DisplayProps> = (course) => {

  console.log(course)

  return <p> OI </p>
}
