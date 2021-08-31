import Teacher from '../../Entities/Teacher'
import { ResourceWithOptions, ValidationError } from 'adminjs'
import { Connection } from 'typeorm'
import TeacherRepository from 'Repository/TeacherRepository'


const teacherResource = (conn: Connection): ResourceWithOptions => {

  const teacherRepo = conn.getCustomRepository(TeacherRepository)

  return ({
    resource: Teacher,
    options: {
      listProperties: ["email", "courses"],
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
        }
      },
      navigation: "Admin/Professores",

    }
  })
}

export default teacherResource
