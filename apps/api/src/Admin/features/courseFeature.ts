import adminjs, { BaseProperty, BaseRecord, BaseResource, buildFeature } from 'adminjs'
import { RequestRepository } from "Repository/RequestRepository"

// Create new action for admin example
export const courseActions = (requestRepo: RequestRepository) => buildFeature({
  actions: {
    abrirCurso: {
      icon: "Task",
      actionType: "record",
      isAccessible: ({currentAdmin}) => {
        if(currentAdmin) {
          return currentAdmin.title == "admin" || currentAdmin.title == "professor"
        }
        return false
      },
      handler: async (_request, _response, context ) => {
        const { currentAdmin } = context
        const record = context.record as BaseRecord

        record.update({
          available: true
        })

        return {
          record: record.toJSON(currentAdmin),
          notice: {
            message: ` Curso Aberto `
          }
        }
      },
      component: false
    },
    fecharCurso: {
      actionType: "record",
      icon: "MisuseOutline",
      isAccessible: ({currentAdmin}) => {
        if(currentAdmin) {
          return currentAdmin.title == "professor" || currentAdmin.title == "admin"
        }
        return false
      },
      handler: async (_request, _response, context) => {
        const { currentAdmin } = context
        const record = context.record as BaseRecord


        record.update({
          available: false
        })
        return {
          record: record.toJSON(currentAdmin),
          notice: {
            message: ` Curso fechado`
          }
        }
      },
      component: false
    },
    inscricoes: {
      actionType: "record",
      component: adminjs.bundle("../components/subscription.tsx"),
      hideActionHeader: true,
      handler: async (_request, _response, context) => {
        const { currentAdmin, record } = context

        if(record) {
          const inscricoes = await requestRepo.find({
            where: { course: record.params.id }
          })
          .then(req => {
            return req
          })

          const RequestReference = new BaseProperty({
            type: "reference",
            path: "Request"
          })

          context.resource.properties().push(RequestReference)
          context.records
          
          if(inscricoes) {

            record.params = {
              ...record?.params,
              inscricoes
            }
          }
        }

        return {
          record: record!.toJSON(currentAdmin),
        }
      }
    }
  }
})

export default courseActions
