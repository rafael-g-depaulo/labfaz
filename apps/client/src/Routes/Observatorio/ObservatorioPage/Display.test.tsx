import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import render from "Utils/render"
import ObservatorioPageDisplay from "./Display"

describe("Observatorio Page", () => {
  it("renders without exploding", () => {
    expect(() => render(<BrowserRouter><ObservatorioPageDisplay/></BrowserRouter>)).not.toThrow()
  })
})
