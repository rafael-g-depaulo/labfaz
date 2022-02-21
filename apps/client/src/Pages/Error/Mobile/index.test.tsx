import render from "Utils/render";
import Mobile from ".";

const exampleStatus: number = 500;
const exampleMessage: string = "Internal server error";

it("renders mobile error component", () => {
  expect(() =>
    render(
      <Mobile status={exampleStatus} message={exampleMessage} />
    )
  ).not.toThrow();
});

describe("Check if content of error page", () => {
  const { getByText, getAllByRole } = render(
    <Mobile status={exampleStatus} message={exampleMessage} />
  );

  it("renders error image", () => {
    const images = getAllByRole("img");
    expect(images[0]).toHaveAttribute("alt", "error");
  });

  it("renders generic text", () => {
    const genericText = getByText("Ops...Parece que algo deu errado");
    expect(genericText).toHaveTextContent("Ops...Parece que algo deu errado");
  });
});
