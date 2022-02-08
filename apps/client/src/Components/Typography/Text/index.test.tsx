import Render from 'Utils/render'
import { Text } from './'

it('renders Text component', () => {
  expect(() => Render(
    <Text 
      children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
    />
  )).not.toThrow()
})

describe('Check content of Text', () => {
  const { getByText } = Render(
    <Text 
      children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
    />
  );

  it('check render of text', () => {
    const text = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.')
    expect(text).toHaveTextContent('dolor')
  })
})
