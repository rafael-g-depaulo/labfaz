import Render from 'Utils/render'
import { InternalLinkButton } from './'

it('renders internal link button component', () => {
  expect(() => Render(
    <InternalLinkButton 
      href="/blog" 
      children="Internal Button"
    />
  )).not.toThrow()
})

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <InternalLinkButton 
      href="/blog" 
      children="Internal Button"
    />
  );

  it('check render of button content', () => {
    expect(getByText('Internal Button')).toHaveTextContent('Internal Button')
  })

  it('check link of internal site', () => {
    expect(getByText('Internal Button').closest('a')).toHaveAttribute('href', '/blog')
  })
})
