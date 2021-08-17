import { BaseRecord, buildFeature } from 'adminjs'

// Create new action for admin example
export const validateUser = () => buildFeature({
  actions: {
    validation: {
      icon: "Task",
      actionType: "record",
      handler: async (_request, _response, context ) => {
        const { currentAdmin } = context
        const record = context.record as BaseRecord

        record.update({
          isVerified: true
        })
        return {
          record: record.toJSON(currentAdmin),
          notice: {
            message: ` ${record.params.name} foi verificado `
          }
        }
      },
      component: false
    }
  }
})

export default validateUser
