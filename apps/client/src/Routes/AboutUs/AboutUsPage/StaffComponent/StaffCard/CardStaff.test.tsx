import React from 'react'
import render from 'Utils/render'

import StaffCard from '.'
import { StaffData } from '.'
import { mockImage } from 'Utils/Image'

const image = mockImage({
  url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  alternativeText: "Descriptive of person",
  caption: "A nice caption",
  ext: "jpg"
})

const data: StaffData = {
  name: "Jhon Doe",
  tag: "Coordenação",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
  image: image
}

describe('Staff card component',  () => {
  const mockedData: StaffData = data

  it('Should render without error', () => {
  
    expect(() => render(<StaffCard data={mockedData}/>)).not.toThrow()
  })
})
