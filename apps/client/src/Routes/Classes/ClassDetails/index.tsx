import React, { FC } from "react";

import Display from "./Display";

import { useCourse } from "Api/Courses";

interface RouteParams {
  id: string;
}

export const ClassDetails: FC<RouteParams> = ({ id }) => {
  const course = useCourse(id).data?.data;

  return <Display data={course!} />;
};

export default ClassDetails;
