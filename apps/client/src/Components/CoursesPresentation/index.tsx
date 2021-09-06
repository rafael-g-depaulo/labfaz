import React, { FC } from "react";

import { Homepage } from "Api/Homepage";
import { CoursePresentation } from "Api/CoursePresentation";

import Display from "./Display";

export interface Props {
  texts: Homepage;
  courses: CoursePresentation[];
}

export const CoursesPresentation: FC<Props> = ({ texts, courses }) => {
  return <Display texts={texts} courses={courses} />;
};

export default CoursesPresentation;
