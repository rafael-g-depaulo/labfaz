import Admin from 'Entities/Admin'
import { ResourceWithOptions, ValidationError } from 'adminjs'
import { Connection } from 'typeorm'
// import AdminRepository from 'Repository/AdminRepository'

export interface RequestData {
  email: string,
  password: string,
  role: "admin" | "professor"
}

const adminResource = (_conn: Connection): ResourceWithOptions => {

  // const adminRepo = conn.getCustomRepository(AdminRepository)

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
          before: async (request) => {
            const { payload } = request
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


            if(payload) {
              const isValidEmail = re.test(payload.email)
              if(!isValidEmail) {
                throw new ValidationError({
                  email: {
                    message: "Email inválido"
                  }
              })
            }

              payload.role = "admin"
            }
            
            return request
          }
        }
      },
      navigation: "Admin/Professores"
    },
  
  })
}

export default adminResource
