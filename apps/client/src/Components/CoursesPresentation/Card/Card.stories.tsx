import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { CoursePresentation } from "Api/CoursePresentation";
import Card from "./index";

const sampleCard: CoursePresentation = {
  title: "IX Workshop de Iluminacao",
  subtitle: "iluminação",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  finish_date: "2020-08-05",
  banner_image: {
    url:
      "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    alternativeText: "imagem aleatória",
    caption: "",
    width: 0,
    height: 0,
    ext: "jpeg",
  },
  finished: true,
};

const cards = Array.from({ length: 4 }, () => sampleCard);

storiesOf("Components/CoursesPresentation/Cards", module)
  .addParameters({ component: Card })
  .add("responsive", () => (
    <BrowserRouter>
      <Card courses={cards} isMobile={true} />
    </BrowserRouter>
  ));
