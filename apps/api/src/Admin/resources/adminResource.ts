import Admin from '../../Entities/Admin'
import { BaseRecord, ResourceWithOptions } from 'adminjs'

const adminResource = (): ResourceWithOptions => ({
  resource: Admin,
  options: {
    listProperties: ["name"],
    actions: {
      new: {
        handler: async (request, response, context) => {
          const { currentAdmin } = context
          const record = context.record as BaseRecord

          console.log("RECORD: " + record)
          return response;
        }
      }
    }
  },

})

export default adminResource
