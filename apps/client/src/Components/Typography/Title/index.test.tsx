import Render from 'Utils/render'
import { Title } from './'

it('renders Title component', () => {
  expect(() => Render(
    <Title 
      children="Some Title"
    />
  )).not.toThrow()
})

describe('Check content of Title', () => {
  const { getByText } = Render(
    <Title 
      children="Some Title"
    />
  );

  it('check render of Title', () => {
    const text = getByText("Some Title")
    expect(text).toHaveTextContent("Title")
  })
})
