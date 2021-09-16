import Teacher from 'Entities/Admin'
// import TeacherRepository from 'Repository/TeacherRepository'
import { ResourceWithOptions, ValidationError } from 'adminjs'
import { Connection } from 'typeorm'


const teacherResource = (_conn: Connection): ResourceWithOptions => {

  // const teacherRepo = conn.getCustomRepository(TeacherRepository)

  return ({
    resource: Teacher,
    options: {
      listProperties: ["email", "id", "role"],
      showProperties: ["coursers", "email", "role", "created_at"],
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
              payload.role = "professor"
            }

            return request
          }
        },
        edit: {
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
              payload.role = "professor"
            }

            return request
          }

        }
      },
      navigation: "Admin/Professores",

    }
  })
}

export default teacherResource
