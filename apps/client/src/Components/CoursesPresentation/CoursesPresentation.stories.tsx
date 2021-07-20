import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Homepage } from "Api/Homepage";
import { CoursePresentation } from "Api/CoursePresentation";
import CoursesPresentation from "./Display";

const texts: Homepage = {
  course_presentation_title: "Lorem Ipsum",
  course_presentation_first_text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  course_presentation_second_text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
};

const sampleCourse: CoursePresentation = {
  title: "IX Workshop de Iluminacao",
  subtitle: "iluminação",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  finish_date: "2020-08-05",
  banner_image: {
    url:
      "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "imagem aleatória",
  },
  finished: true,
};

const courses = Array.from({ length: 4 }, () => sampleCourse);

storiesOf("Components/CoursesPresentation", module)
  .addParameters({ component: CoursesPresentation })
  .add("responsive", () => (
    <BrowserRouter>
      <CoursesPresentation texts={texts} courses={courses} />
    </BrowserRouter>
  ));
