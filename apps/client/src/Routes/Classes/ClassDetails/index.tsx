import React, { FC } from "react";

import { useCourse } from "Api/Courses";
import useMobile from "Utils/useMobile";
import MobileCoursePage from "./Mobile"

interface RouteParams {
  id: string;
}

export const ClassDetails: FC<RouteParams> = ({id}) => {
  const course = useCourse(id).data

  const isMobile = useMobile()

  if(course) {
    return isMobile ? <MobileCoursePage course={course} /> : <h1> Não é mobile </h1>
  }
  return <p>oi</p>;
};

export default ClassDetails;
