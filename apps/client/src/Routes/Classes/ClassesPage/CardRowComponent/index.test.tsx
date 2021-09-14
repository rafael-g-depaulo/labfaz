import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";

import CardRowComponent from ".";
import { Course } from "Api/Courses";

const courseExample: Course = {
  id: "p-weRYkb5n_w5czMTx6BC",
  name: "IX Workshop de Iluminacao",
  teacher: ["José Carioca"],
  type: "Curso",
  tags: ["audiovisual", "online"],
  detail: ["50h de aulas", "certificado"],
  fonte: ["labfaz"],
  short_description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
  about:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
  requirements:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
  available: true,
  banner:
    "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  has_subscription: true,
  subscription_start_date: "2021-09-16T03:00:00.000Z",
  subscription_finish_date: "2021-09-30T03:00:00.000Z",
  class_dates: ["2021-10-02T03:00:00.000Z"],
  link: "",
};

const RowExample = {
  title: "Exemplo",
  subtitle: "Novas ideias todos os dias",
  classes: [courseExample],
  color: "linear-gradient(to bottom, rgba(45, 175, 47, 1), rgba(0, 0, 0, 1))",

  fontColor: "var(--color-text-white)",
};

it("renders CardRowComponent", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <CardRowComponent
          title={RowExample.title}
          subtitle={RowExample.subtitle}
          classes={RowExample.classes}
          color={RowExample.color}
          fontColor={RowExample.fontColor}
        />
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check content of CardRowComponent", () => {
  const { getByText } = render(
    <BrowserRouter>
      <CardRowComponent
        title={RowExample.title}
        subtitle={RowExample.subtitle}
        classes={RowExample.classes}
        color={RowExample.color}
        fontColor={RowExample.fontColor}
      />
    </BrowserRouter>
  );

  it("checks if title rendered", () => {
    const title = getByText("Exemplo");
    expect(title).toHaveTextContent("Exemplo");
  });

  it("checks if subtitle rendered", () => {
    const subtitle = getByText("Novas ideias todos os dias");
    expect(subtitle).toHaveTextContent("Novas ideias todos os dias");
  });
});
