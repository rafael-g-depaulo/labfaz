import userResource from './userResource'
import adminResource from './adminResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = (conn: Connection) => {
  return [
<<<<<<< HEAD
<<<<<<< HEAD
    userResource(conn),
    adminResource(conn)
<<<<<<< HEAD
=======
    userResource(),
=======
    userResource(conn),
>>>>>>> aac21ac (✨ feature ban and verify)
    adminResource()
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
=======
>>>>>>> 327eea4 (✨ feature admin creation)
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
