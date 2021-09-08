import React from 'react'
import render from 'Utils/render'
import { BrowserRouter } from 'react-router-dom'

import Staff from '.'
import { TeamsData, StaffObject, Team } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'

// import { screen, logRoles } from "@testing-library/dom"

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

const team: Team = {
  id: 2,
  name: "Coordenação",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  staff: [StaffInfo, StaffInfo, StaffInfo2, StaffInfo2]
}

const teams: TeamsData = {
  team: Array.from({ length: 3 }, (_, i) => ({ ...team, id: i})),
  subtitulo: "teste teste teste"
}

describe('Staffs component',  () => {
  const mockedData = teams

  it('Should render without error', () => {
  
    expect(() => render(<BrowserRouter><Staff data={teams}  /></BrowserRouter>)).not.toThrow()
  })

  it('Should render 2 drawers', () => {
    const component = render(<BrowserRouter><Staff data={mockedData} /></BrowserRouter>)


    const cards = component.getAllByRole('heading', { level: 1 })

    expect(cards[2].innerHTML).toBe(" Coordenação ")
  })

  it('Should have a header with the staff title',  () => {
    const component = render(<BrowserRouter><Staff data={mockedData} /></BrowserRouter>)

    const header = component.getAllByRole('heading', { level: 1 })

    expect(header[0]).toHaveTextContent('STAFF')
  })

  it('Should have a subtitle header',  () => {
    const component = render(<BrowserRouter><Staff data={mockedData} /></BrowserRouter>)

    const header = component.getByRole('heading', { level: 3 })

    expect(header).toHaveTextContent(teams.subtitulo)
  })
})
