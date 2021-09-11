import { ResourceWithOptions } from "adminjs"
// import UserRepository from "Repository/UserRepository"
import { Connection } from "typeorm"
import { Request } from "../../Entities/Requests"

const subscriptionResource = (conn: Connection): ResourceWithOptions => {

  // Se a função do mailer estiver conectada a um repository pode-se pegar o repositorio aqui
  // const userRepo = conn.getCustomRepository(UserRepository)

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
                status
              })

              record.save()
                .catch(() => {
                  return {
                    record: record.toJSON(currentAdmin),
                    notice: {
                      message: "request failed"
                    }
                  }
                })

                // pegar o id do curso
                const courseId = record.get('course.id')
                const studentId = record.get('student.id')

                // Para ter acesso a um resource
                const courseResource = context._admin.findResource("Course")
                const userResource = context._admin.findResource("User")
                // retornar o curso
                const course = await courseResource.findOne(courseId)
                const user = await userResource.findOne(studentId)
                
                // os dados do curso vão estar em params do course
                // dados em array é preciso pegar com o método "selectParams" que retornar um dicionario
                if(course && user) {
                  // course?.get()
                  console.log(course.params)
                  console.log(user.params.email)
                  // console.log(course.params)
                }
    
              // tendo os dados do curso necessários param mandar o email só mandar aqui!
                
            }

            
            
            /*

            */

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
