import { ResourceWithOptions } from "adminjs"
import { Request } from "../../Entities/Requests"

const subscriptionResource = (): ResourceWithOptions => {

  return({
    resource: Request,
    options: {
      navigation: false
    },
  })
}

export default subscriptionResource
