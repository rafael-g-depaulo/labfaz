import userResource from './userResource'
import adminResource from './adminResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = (conn: Connection) => {
  return [
<<<<<<< HEAD
    userResource(conn),
    adminResource(conn)
=======
    userResource(),
    adminResource()
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
