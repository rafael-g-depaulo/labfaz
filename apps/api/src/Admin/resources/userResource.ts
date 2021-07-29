import User from '../../Entities/User'
import validateUser from "../features/validate-user"
import { ResourceWithOptions } from 'admin-bro'


// Modulated entity resource
const userResource = (): ResourceWithOptions => ({
    resource: User,
    options: {
      listProperties: ["name", "email", "banned"],
      navigation: {
        icon: "Tools",
        name: "Labfaz Admin Panel"
      }
    },

    features: [validateUser()]
})

export default userResource
// <OperationsField32 />
