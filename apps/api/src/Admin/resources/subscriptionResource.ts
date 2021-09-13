import { ResourceWithOptions } from "adminjs"
import { Connection } from "typeorm"

import { ShowName } from "Entities/Artist"
import { Request } from "Entities/Requests"

import { sendAprovedEmail, sendNotAprovedEmail } from "Mailer/courseSubscriptionResponse"
import RequestRepository from "Repository/RequestRepository"

import { Inscricoes } from "../components/subscription"

const subscriptionResource = (conn: Connection): ResourceWithOptions => {

  const requestRepo = conn.getCustomRepository(RequestRepository)

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
        },
        getOpenSubscriptions: {
          actionType: "resource",
          component: false,
          handler: async (request, response) => {
            const courseId = request.query?.courseId
            console.log(request.params)

            if(!courseId) return response
            console.log("has course")
            const requests = await requestRepo.find({
              where: {
                course: courseId,
                status: "pending"
              }
            })
            .then(req => {
              const subscriptions = [] as Inscricoes[]
              req.map(r => {
                subscriptions.push({
                  id: r.id,
                  status: r.status,
                  student: {
                    email: r.student.email
                  }
                })
              })
              return subscriptions
            })


            if(requests) {
              response.data = {
                requests
              }
            }

            console.log(response.data)

            return {
              notice: {
                message: "returning subscriptions"
              },
              response
            }
          }
        }
      }
    },
  })
}

export default subscriptionResource
