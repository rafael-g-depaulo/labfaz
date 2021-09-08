import React from 'react'
import { BrowserRouter } from 'react-router-dom'

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
    const title = getByText('Entrar')
    expect(title).toHaveTextContent('Entrar')
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
    expect(getByText('Esqueceu sua senha?').closest('a')).toHaveAttribute(
      'href',
      '/recover'
    )
  })
})
