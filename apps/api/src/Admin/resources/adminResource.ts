import Admin from '../../Entities/Admin'
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

export default adminResource
