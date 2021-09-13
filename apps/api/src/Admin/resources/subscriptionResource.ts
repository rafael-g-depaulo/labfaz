import { ResourceWithOptions } from "adminjs"
import { Connection } from "typeorm"

import { ShowName } from "Entities/Artist"
import { Request } from "Entities/Requests"

import { sendAprovedEmail, sendNotAprovedEmail } from "Mailer/courseSubscriptionResponse"
// import UserRepository from "Repository/UserRepository"

const subscriptionResource = (_conn: Connection): ResourceWithOptions => {

  return({
    resource: Request,
    options: {
      navigation: false,
      actions: {
        updateStatus: {
          actionType: "record",
          handler: async (request, _response, context) => {
            const { currentAdmin, record } = context
            const status = request.payload

            if (!record) return {
              record: record!.toJSON(currentAdmin),
              notice: {
                type: "error",
                message: "failed to update record"
              }
            }

            // pegar o id do curso
            const courseId = record.get('course.id')
            const studentId = record.get('student.id')

            // Para ter acesso a um resource
            const courseResource = context._admin.findResource("Course")
            const userResource = context._admin.findResource("User")
            // retornar o curso
            const [course, user] = await Promise.all([courseResource.findOne(courseId), userResource.findOne(studentId)])
            
            if (!course || !user) return {
              record: record!.toJSON(currentAdmin),
              notice: {
                type: "error",
                message: "failed to update record"
              }
            }

            try {
              record.update({
                status
              })
              record.save()
            } catch (e) {
              return {
                record: record.toJSON(currentAdmin),
                notice: {
                  message: "request failed"
                }
              }
            }

            // parse info for email
            const showName =
              user.params["artist.show_name"] === ShowName.ARTISTIC ? "artistic_name"
              : user.params["artist.show_name"] === ShowName.SOCIAL ? "social_name"
              : "name"
            const userName = user.params[`artist.${showName}`]
            const userEmail = user.params.email
            const courseName = course.params.name

            // send correct email depending on status
            try {
              if (status?.status === 'accepted') {
                const courseDates = Object.values(course.selectParams("class_dates") ?? {})
                const courseLink = course.params.link
                await sendAprovedEmail(userEmail, userName, courseName, courseLink, courseDates)
              } else {
                await sendNotAprovedEmail(userEmail, userName, courseName)
              }
            } catch {
              return {
                record: record.toJSON(currentAdmin),
                notice: {
                  message: "request failed"
                }
              }
            }

            return {
              record: record.toJSON(currentAdmin),
              notice: {
                type: "success",
                message: "request updated successfully"
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
