import React from 'react'
import Render from 'Utils/render'
import { fireEvent } from '@testing-library/react'
import Banner from './'

it('renders header component', () => {
  expect(() => Render(<Banner />)).not.toThrow()
})

describe('Check content of Banner component', () => {
  const { getByText } = Render(<Banner />);
  it('check render of title', () => {
    expect(getByText('LABFAZ')).toHaveTextContent('LABFAZ')
  })
  it('check render of subtitle', () => {
    const subtitle = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.')
    expect(subtitle).toHaveTextContent('Lorem')
  })
  it('check link of know more', () => {
    const link = getByText('SAIBA MAIS');
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', '/about')
  })
})
