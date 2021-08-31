import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Render from "Utils/render"
import { AskReset } from './'
import { PasswordChange } from './passwordChange'

import { render } from '@testing-library/react'

it('Shoud render ask reset form properly', () => {
  expect(() => Render(
    <BrowserRouter>
      <AskReset />
    </BrowserRouter>
  )).not.toThrow()
})

it('Should have a text input page title', () => {
  const Component = render(
    <BrowserRouter>
      <AskReset />
    </BrowserRouter>
  ).getByRole('textbox')

  expect(Component).toBeTruthy()
})

it('Shoud render reset password form properly', () => {
  expect(() => Render(
    <BrowserRouter>
      <PasswordChange token=""/>
    </BrowserRouter>
  )).not.toThrow()
})
