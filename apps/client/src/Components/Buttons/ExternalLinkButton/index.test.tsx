
import Render from 'Utils/render'
import { ExternalLinkButton } from './'

it('renders external link button component', () => {
  expect(() => Render(
    <ExternalLinkButton 
      href="https://google.com.br" 
      children="External Button"
    />
  )).not.toThrow()
})

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <ExternalLinkButton 
      href="https://google.com.br" 
      children="External Button"
    />
  );

  it('check render of button content', () => {
    expect(getByText('External Button')).toHaveTextContent('External Button')
  })

  it('check link of external site', () => {
    expect(getByText('External Button').closest('a')).toHaveAttribute('href', 'https://google.com.br')
  })
})
