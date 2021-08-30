import { ResourceWithOptions } from "adminjs"
import { Request } from "../../Entities/Requests"

const subscriptionResource = (): ResourceWithOptions => {

  return({
    resource: Request,
    options: {
      navigation: {
        icon: "Tools",
        name: "Labfaz Admin Panel"
      },
    }
  })
}

export default subscriptionResource
