import React, { FC } from "react";

import Display from "./Display";

import { useCourse } from "Api/Courses";

import LoadingFullPage from "Components/LoadingFullPage";

interface RouteParams {
  id: string;
}

export const ClassDetails: FC<RouteParams> = ({ id }) => {
  const course = useCourse(id);

  if (course.isLoading) return <LoadingFullPage />;

  return <Display data={course.data?.data!} />;
};

export default ClassDetails;
