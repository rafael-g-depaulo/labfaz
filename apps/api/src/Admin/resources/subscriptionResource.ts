import { ResourceWithOptions } from "adminjs"
import { Request } from "../../Entities/Requests"

const subscriptionResource = (): ResourceWithOptions => {

  return({
    resource: Request,
    options: {
      navigation: {
        icon: "Tools",
        name: "Course"
      },
    }
  })
}

export default subscriptionResource
