
import render from 'Utils/render'
import Newsletter from './index'

it('renders Newsletter component', () => {
  expect(() => render(<Newsletter />)).not.toThrow()
})

describe('Checks links succesfully redirects to another page', () => {
  const { getByText, getByTestId } = render(<Newsletter />);

  it('checks text', () => {
    expect(getByText('Receba novidades e lançamentos')).toHaveTextContent('novidades')
  })

  it('checks input', () => {
    expect(getByTestId('input')).toHaveAttribute('placeholder', 'Seu e-mail')
  })

  it('checks button', () => {
    expect(getByTestId('button')).toHaveAttribute('type', 'button')
  })
 
})
