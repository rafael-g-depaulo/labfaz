import React, { FC } from "react";

import { useHomepage } from "Api/Homepage";
import { useCoursePresentations } from "Api/CoursePresentation";

import Loading from "Components/Loading";
import Display from "./Display";

export const CoursesPresentation: FC = () => {
  const { data, error, isLoading } = useHomepage();
  const coursesData = useCoursePresentations();

  if (error) return <div>error: {error?.message ?? ""}</div>;
  if (isLoading) return <Loading />;

  if (coursesData.error)
    return <div>error: {coursesData.error?.message ?? ""}</div>;
  if (coursesData.isLoading) return <Loading />;

  return <Display texts={data!} courses={coursesData.data!} />;
};

export default CoursesPresentation;
