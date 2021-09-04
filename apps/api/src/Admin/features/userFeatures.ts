import { BaseRecord, buildFeature } from 'adminjs'

// Create new action for admin example
export const userActions = (_userRepo: any) => buildFeature({
  actions: {
    backstage: {
      icon: "Task",
      actionType: "record",
      isAccessible: ({currentAdmin}) => {
        if(currentAdmin) {
          return currentAdmin.title == "SuperAdmin" || currentAdmin.title == "admin"
        }
        return false
      },
      handler: async (_request, _response, context ) => {
        const { currentAdmin } = context
        const record = context.record as BaseRecord

        record.update({
          isVerified: true
        })

        return {
          record: record.toJSON(currentAdmin),
          notice: {
            message: ` ${record.params.email} foi verificado `
          }
        }
      },
      component: false
    },
    Ban: {
      actionType: "record",
      icon: "MisuseOutline",
      isAccessible: ({currentAdmin}) => {
        if(currentAdmin) {
          return currentAdmin.title == "SuperAdmin" || currentAdmin.title == "admin"
        }
        return false
      },
      handler: async (_request, _response, context) => {
        const { currentAdmin } = context
        const record = context.record as BaseRecord

        const curretStatus = record.get("banned")

        record.update({
          banned: !curretStatus
        })

        if(curretStatus) {
          return {
            record: record.toJSON(currentAdmin),
            notice: {
              message: ` ${record.params.email} não está mais banido `
            }
          }
        }
        return {
          record: record.toJSON(currentAdmin),
          notice: {
            message: ` ${record.params.email} foi banido `
          }
        }
      },
      component: false
    }

  }
})

export default userActions
