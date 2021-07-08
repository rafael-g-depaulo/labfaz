import React from "react";
import render from "Utils/render";

import Display from "./Display";

const coursesPresentationExample = {
  course_presentation_title: "Isso é um exemplo",
  course_presentation_first_text: "Primeiro parágrafo",
  course_presentation_second_text: "Segundo parágrafo",
};

const cardExample = [
  {
    title: "Teste",
    subtitle: "iluminação",
    description: "Descrição aqui",
    finish_date: "2020-08-05",
    banner_image: {
      url: "https://www.pexels.com/pt-br/foto/aniversario-dia-do-nascimento-floracao-florescencia-8285483/",
      name: "imagem aleatória",
    },
    finished: true,
  },
];

it("renders CoursesPresentation component", () => {
  expect(() =>
    render(<Display texts={coursesPresentationExample} courses={cardExample} />)
  ).not.toThrow();
});

describe("Check content of CoursesPresentation component", () => {
  const { getByText } = render(
    <Display texts={coursesPresentationExample} courses={cardExample} />
  );

  it("checks if title rendered", () => {
    const title = getByText("Isso é um exemplo");
    expect(title).toHaveTextContent("Isso é um exemplo");
  });

  it("checks if the first paragraph rendered", () => {
    const firstParagraph = getByText("Primeiro parágrafo");
    expect(firstParagraph).toHaveTextContent("Primeiro parágrafo");
  });

  it("checks if the second paragraph rendered", () => {
    const secondParagraph = getByText("Segundo parágrafo");
    expect(secondParagraph).toHaveTextContent("Segundo parágrafo");
  });
});
