import React, { FC } from "react";

import LoadingFullPage from "Components/LoadingFullPage";
import Error from "Pages/Error";

import { useCourses } from "Api/Courses";
import { useCoursesPageIntroduction } from "Api/CoursesPageIntroduction";
import { useStayTuned } from "Api/StayTuned";
import { useCoursesPageSections } from "Api/CoursesPageSections";

import Display from "./Display";

export const ClassesPage: FC = () => {
  const courses = useCourses();
  const introduction = useCoursesPageIntroduction();
  const stayTuned = useStayTuned();
  const sections = useCoursesPageSections();

  if (
    courses.isLoading ||
    introduction.isLoading ||
    // stayTuned.isLoading ||
    sections.isLoading
  )
    return <LoadingFullPage />;

  // errors
  if (
    (courses.error || sections.error) &&
    introduction.error
    // && stayTuned.error
  )
    return (
      <Error
        errorStatus={introduction.error.response?.status}
        errorMessage={introduction.error.response?.statusText}
      />
    );

  if (introduction.error && stayTuned.error)
    return (
      <Error
        errorStatus={introduction.error.response?.status}
        errorMessage={introduction.error.response?.statusText}
      />
    );

  if ((courses.error || sections.error) && introduction.error)
    return (
      <Error
        errorStatus={introduction.error.response?.status}
        errorMessage={introduction.error.response?.statusText}
      />
    );

  if ((courses.error || sections.error) && stayTuned.error)
    return (
      <Error
        errorStatus={stayTuned.error.response?.status}
        errorMessage={stayTuned.error.response?.statusText}
      />
    );

  if (courses.error || sections.error)
    return (
      <Display
        data={{ Curso: [], Live: [], Oficina: [], "Roda de conversa": [] }}
        introduction={introduction.data}
        stayTuned={stayTuned.data}
        sections={{
          first_subtitle: "",
          first_title: "Cursos IATEC",
          second_title: "Oficinas",
          second_subtitle: "",
          third_title: "Lives",
          third_subtitle: "",
          fourth_title: "Rodas de Conversa",
          fourth_subtitle: "",
        }}
      />
    );

  if (introduction.error)
    return (
      <Display
        data={courses.data.data}
        introduction={undefined}
        stayTuned={stayTuned.data}
        sections={sections.data}
      />
    );

  if (stayTuned.error)
    return (
      <Display
        data={courses.data.data}
        introduction={introduction.data}
        stayTuned={undefined}
        sections={sections.data}
      />
    );

  return (
    <Display
      data={courses.data.data}
      introduction={introduction.data}
      stayTuned={stayTuned.data}
      sections={sections.data}
    />
  );
};

export default ClassesPage;
