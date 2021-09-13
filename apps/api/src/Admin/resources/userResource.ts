import User from '../../Entities/User'
import userActions from "../features/userFeatures"
import { ResourceWithOptions } from 'adminjs'
import UserRepository from 'Repository/UserRepository'
import { Connection } from 'typeorm'


// Modulated entity resource
const userResource = (conn: Connection): ResourceWithOptions => {

  const userRepo = conn.getCustomRepository(UserRepository)

  return({
    resource: User,
    options: {
      navigation: {
        icon: "Tools",
        name: "Labfaz Admin Panel"
      },
      actions: {
        new: {
          isAccessible: false
        },
        delete: {
          isAccessible: false
        },
        edit: {
          isAccessible: false
        }
      }
    },
    features: [userActions(userRepo)]
})
}

export default userResource
// <OperationsField32 />
