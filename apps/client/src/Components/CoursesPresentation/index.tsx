import { FC } from "react";

import Display from "./Display";

import { Homepage } from "Api/Homepage";
import { CoursePresentation } from "Api/CoursePresentation";

export interface CoursesPresentationProps {
  texts: Homepage;
  courses: CoursePresentation[];
}

export const CoursesPresentation: FC<CoursesPresentationProps> = ({
  courses,
  texts,
}) => {
  return <Display texts={texts} courses={courses} />;
};

export default CoursesPresentation;
