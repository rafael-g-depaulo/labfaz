import userResource from './userResource'
import adminResource from './adminResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = () => {
  return [
    userResource(),
    adminResource()
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
