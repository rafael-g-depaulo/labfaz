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
=======
    userResource(),
=======
    userResource(conn),
>>>>>>> aac21ac (✨ feature ban and verify)
    adminResource()
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
