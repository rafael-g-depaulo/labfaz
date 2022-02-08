import Drawer from '.'
// import StaffCard from 'Routes/AboutUs/AboutUsPage/StaffComponent/StaffCard'
// import { mockImage } from '@labfaz/strapi-utils'

const description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
const title = "TEAM #1"

// const image = mockImage({
//   url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//   alternativeText: "Descriptive of person",
//   caption: "A nice caption",
//   ext: "jpg"
// })

// const staff = {
//   id: 1,
//   name: "José da silva",
//   tag: 'O mais pica',
//   text: "Lorem ipsum for some hours to take place",
//   image: image
// }

// const Card = <StaffCard  data={staff} />
const Card = <div>TODO: uncomment StaffCard</div>

export default {
  title: 'Components/Drawer',

  parameters: {
    component: Drawer,
  },
}

export const responsive = () => (
  <Drawer description={description} teamName={title} children={Card}/>
)
