import Admin from '../../Entities/Admin'
<<<<<<< HEAD
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
=======
import { BaseRecord, BaseResource, ResourceWithOptions } from 'adminjs'
import { Connection } from 'typeorm'
import AdminRepository from 'Repository/AdminRepository'
>>>>>>> 327eea4 (✨ feature admin creation)

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
<<<<<<< HEAD
    }
  },

})
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
=======
    },
  
  })
}
>>>>>>> 327eea4 (✨ feature admin creation)

export default adminResource
