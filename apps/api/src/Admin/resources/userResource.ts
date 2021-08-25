import User from '../../Entities/User'
import validateUser from "../features/validate-user"
import { ResourceWithOptions } from 'adminjs'


// Modulated entity resource
const userResource = (): ResourceWithOptions => ({
    resource: User,
    options: {
      navigation: {
        icon: "Tools",
        name: "Labfaz Admin Panel"
      }
    },

    features: [validateUser()]
})

export default userResource
// <OperationsField32 />
