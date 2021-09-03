import { ResourceWithOptions } from "adminjs"
import { Request } from "../../Entities/Requests"

const subscriptionResource = (): ResourceWithOptions => {

  return({
    resource: Request,
    options: {
      navigation: false,
      actions: {
        updateStatus: {
          actionType: "record",
          handler: async (request, _response, context) => {
            const {currentAdmin, record} = context
            console.log("params", request.params)
            console.log("payload", request.payload)
            console.log("method", request.method)

            return {
              record: record!.toJSON(currentAdmin)
            }
          },
          component: false
        }
      }
    },
  })
}

export default subscriptionResource
