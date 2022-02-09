import Error from "."
import Web from "./Web"
import Mobile from "./Mobile"

const exampleStatus: number = 500
const exampleMessage: string = "Internal server error"

export default {
  title: 'Pages/Error',

  parameters: {
    component: Error,
  },
}

export const responsive = () => (
  <Error errorStatus={exampleStatus} errorMessage={exampleMessage}  />
)
responsive.story = {
  name: "responsive"
}

export const web = () => (
  <Web status={exampleStatus} message={exampleMessage}  />
)
web.story = {
  name: "web"
}

export const mobile = () => (
  <Mobile status={exampleStatus} message={exampleMessage}  />
)
mobile.story = {
  name: "mobile"
}
