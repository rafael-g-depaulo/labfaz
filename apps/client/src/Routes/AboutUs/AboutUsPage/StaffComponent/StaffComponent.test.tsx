import React from 'react'
import render from 'Utils/render'
import { BrowserRouter } from 'react-router-dom'

import Staff from '.'
import { StaffData, StaffObject } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'

const image = mockImage({
  url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  alternativeText: "Descriptive of person",
  caption: "A nice caption",
  ext: "jpg"
})

const StaffInfo: StaffObject = {
  id: 1,
  name: "Jhon Doe",
  tag: "Coordenação",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
  image: image
}

const StaffInfo2: StaffObject = {
  id: 2,
  name: "Jhon Doe",
  tag: "Coordenação",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
  image: image
}

const Staffs: StaffData = {
  staff: [StaffInfo, StaffInfo2]
}

describe('Staffs component',  () => {
  const mockedData: StaffData = Staffs

  it('Should render without error', () => {
  
    expect(() => render(<BrowserRouter><Staff data={mockedData}/></BrowserRouter>)).not.toThrow()
  })
})
