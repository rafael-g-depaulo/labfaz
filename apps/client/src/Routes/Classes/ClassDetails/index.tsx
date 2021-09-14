import React, { FC } from "react";

import { useCourse } from "Api/Courses";

interface RouteParams {
  id: string;
}

export const ClassDetails: FC<RouteParams> = ({id}) => {
  const course = useCourse(id);
  console.log(course.data)

  return <p>oi</p>;
};

export default ClassDetails;
