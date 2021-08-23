import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Render from "Utils/render"
import { RecoverForm as AskRecover } from './'
import { PasswordChange } from './passwordChange'

import { render } from '@testing-library/react'

it('Shoud render ask reset form properly', () => {
  expect(() => Render(
    <BrowserRouter>
      <AskRecover />
    </BrowserRouter>
  )).not.toThrow()
})

it('Should have a text input page title', () => {
  const Component = render(
    <BrowserRouter>
      <AskRecover />
    </BrowserRouter>
  ).getByRole('textbox')

  expect(Component).toBeTruthy()
})

it('Shoud render resert password form properly', () => {
  expect(() => Render(
    <BrowserRouter>
      <PasswordChange />
    </BrowserRouter>
  )).not.toThrow()
})
