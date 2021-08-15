import React from 'react'
import { storiesOf } from '@storybook/react'

import AboutUsPage from './Display'
import Staff from './StaffComponent'
import { mockImage } from 'Utils/Image'
import { AboutUsData, Team, TeamsData, StaffObject } from 'Api/AboutUs'

const image = mockImage({
  url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
  alternativeText: "string",
  caption: "string",
  width: 20,
  height: 20,
  ext: "png"
})

const Staffimage = mockImage({
  url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  alternativeText: "Descriptive of person",
  caption: "A nice caption",
  ext: "jpg"
})

const StaffInfo: StaffObject = {
  id: 54,
  name: "Jhon Doe",
  tag: "Coordenação",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
  image: Staffimage
}

const mockedAboutUsData: AboutUsData = {
  banner_data: "Quem Somos",
  welcome_data: {
    id: 1,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  about_us_data: [{
    id: 2,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

  },
  {
    id: 2,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

  }]
}

const team: Team = {
  name: "Some name",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  staff: Array.from({ length: 40 }, () => StaffInfo)
}

const mockedTeamData: TeamsData = {
  team: [team, team]
}

storiesOf("Pages/AboutUs", module)
  .addParameters({ component: AboutUsPage, subcomponent: Staff  })
  .add("responsive", () => (<AboutUsPage about_data={mockedAboutUsData} team={mockedTeamData} />))
