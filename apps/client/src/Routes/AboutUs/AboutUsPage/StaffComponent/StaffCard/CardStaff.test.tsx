import React from 'react'
import render from 'Utils/render'

import { BrowserRouter } from 'react-router-dom'

import StaffCard from '.'
import { StaffObject } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'


const image = mockImage({
  url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  alternativeText: "Descriptive of person",
  caption: "A nice caption",
  ext: "jpg"
})

const StaffInfo: StaffObject = {
  id: Math.random(),
  name: "Jhon Doe",
  tag: "Coordenação",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
  image: image
}

describe('Staff card component',  () => {
  const mockedData: StaffObject = StaffInfo

  it('Should render without error', () => {
  
    expect(() => render(<BrowserRouter><StaffCard data={mockedData}/></BrowserRouter>)).not.toThrow()
  })

  it('Should render staff image with src', () => {
    const component = render(<BrowserRouter><StaffCard data={mockedData} /></BrowserRouter>)
    
    const Card = component.getAllByRole('generic', { hidden: true })

    const CircleImage = Card[2]
    
    expect(CircleImage).toHaveStyle(`background-image: url(${mockedData.image.url})`)
  })

  it('Should have a tag text', () => {
    const component = render(<BrowserRouter><StaffCard data={mockedData} /></BrowserRouter>)

    const element = component.getByText(mockedData.tag)


    expect(element).toHaveTextContent(mockedData.tag)
  })

  it('Should rander staff name', () => {
    const component = render(<BrowserRouter><StaffCard data={mockedData} /></BrowserRouter>)

    const element = component.getByText(mockedData.name)


    expect(element).toHaveTextContent(mockedData.name)
  })


  it('Should render all text data',  () =>{
    const component = render(<BrowserRouter><StaffCard data={mockedData} /></BrowserRouter>)

    const Div = component.getAllByRole('generic')

    const paragraphs = Div[0].querySelectorAll('p')


    expect(paragraphs[2]).toBeVisible()
  })
})
