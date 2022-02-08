import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import render from 'Utils/render'
import Mobile from './'

it('renders header component', () => {
  expect(() => render(
    <BrowserRouter>
      <Mobile/>
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Page', () => {
  const { getByText, getAllByRole } = render(
    <BrowserRouter>
      <Mobile/>
    </BrowserRouter>
  );

  it('check not_found image', () => {
    const images = getAllByRole('img')
    expect(images[1]).toHaveAttribute('alt', 'not_found')
  })

  it('check text of in not_found', () => {
    expect(getByText('procurando', { exact: false })).toHaveTextContent('página')
  })
})
