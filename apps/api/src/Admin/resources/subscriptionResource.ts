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
            
            const status = request.payload

            if(record) {
              record.update({
                status: status
              })

              await record.save()
                .catch(err => {
                  return {
                    record: record.toJSON(currentAdmin),
                    notice: {
                      message: "request failed"
                    }
                  }
                })
            }

            return {
              record: record!.toJSON(currentAdmin),
              notice: {
                message: "request updated"
              }
            }
          },
          component: false
        }
      }
    },
  })
}

export default subscriptionResource
