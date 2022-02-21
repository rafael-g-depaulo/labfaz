import Render from "Utils/render"
import { AskReset } from './'
import { PasswordChange } from './passwordChange'

// import { render } from '@testing-library/react'
// import { BrowserRouter } from "react-router-dom"

it('Shoud render ask reset form properly', () => {
  expect(() => Render(
    <AskReset />
  )).not.toThrow()
})

it('Should have a text input page title', () => {
  const Component = Render(
    <AskReset />
  ).getByRole('textbox')

  expect(Component).toBeTruthy()
})

it('Shoud render reset password form properly', () => {
  expect(() => Render(
    <PasswordChange token=""/>
  )).not.toThrow()
})
