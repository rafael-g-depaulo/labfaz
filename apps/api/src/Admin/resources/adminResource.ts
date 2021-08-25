import Admin from '../../Entities/Admin'
<<<<<<< HEAD
import { BaseRecord, BaseResource, ResourceWithOptions } from 'adminjs'
import { Connection } from 'typeorm'
import AdminRepository from 'Repository/AdminRepository'

interface RequestData {
  email: string,
  password: string,
  role: "admin" | "professor"
}


const adminResource = (conn: Connection): ResourceWithOptions => {

  const adminRepo = conn.getCustomRepository(AdminRepository)

  return ({
    resource: Admin,
    options: {
      listProperties: ["email"],
      actions: {
        new: {
          isAccessible: ({ currentAdmin }) => {
            if(currentAdmin) {
              if(currentAdmin.title == "SuperAdmin") {
                return true
              }
            }
            return false
          },
        }
      }
    },
  
  })
}
=======
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
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)

export default adminResource
