import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";
import { formatPostDate } from "Utils/formatPostDate";

import Display from "./Display";

const postCardExample = [
  {
    title: "Teste de blog post",
    description: "Isso é um teste",
    created_at: "2021-06-29T23:50:54.596Z",
    image: {
      url:
        "https://www.pexels.com/pt-br/foto/aniversario-dia-do-nascimento-floracao-florescencia-8285483/",
      name: "imagem aleatória",
    },
  },
];

it("renders blog post component", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Display posts={postCardExample} />
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check content of PostCard component", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Display posts={postCardExample} />
    </BrowserRouter>
  );

  it("checks if title rendered", () => {
    const title = getByText("Teste de blog post");
    expect(title).toHaveTextContent("Teste de blog post");
  });

  it("checks if weekday rendered", () => {
    const weekday = getByText(formatPostDate("2021-06-29T23:50:54.596Z")?.day);
    expect(weekday).toHaveTextContent(
      formatPostDate("2021-06-29T23:50:54.596Z")?.day
    );
  });

  it("checks if hour rendered", () => {
    const hour = getByText(formatPostDate("2021-06-29T23:50:54.596Z")?.hour);
    expect(hour).toHaveTextContent(
      formatPostDate("2021-06-29T23:50:54.596Z")?.hour
    );
  });

  it("checks if description rendered", () => {
    const description = getByText("Isso é um teste");
    expect(description).toHaveTextContent("Isso é um teste");
  });
});
