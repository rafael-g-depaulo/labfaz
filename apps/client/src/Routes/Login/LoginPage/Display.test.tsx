import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { navLinks } from 'Utils/navLinks'

import render from 'Utils/render'
import Display from './Display'

it('renders login component', () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Display onSubmit={() => {}} buttonType="button" />
      </BrowserRouter>
    )
  ).not.toThrow()
})

describe('Check content of Login component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Display onSubmit={() => {}} buttonType="button" />
    </BrowserRouter>
  )

  it('checks if title rendered', () => {
    // const title = getByText('ENTRAR')
    // expect(title).toHaveTextContent('ENTRAR')
  })

  it('checks if subtitle rendered', () => {
    const title = getByText(
      'Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa'
    )
    expect(title).toHaveTextContent(
      'Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa'
    )
  })
})

describe('Check user session links', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Display onSubmit={() => {}} buttonType="button" />
    </BrowserRouter>
  )

  it('check Recover link', () => {
    expect(getByText(navLinks.forgotPass.label).closest('a')).toHaveAttribute(
      'href',
      navLinks.forgotPass.path
    )
  })
})
