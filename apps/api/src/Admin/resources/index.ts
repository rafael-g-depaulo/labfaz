import userResource from './userResource'
import adminResource from './adminResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = (conn: Connection) => {
  return [
    userResource(conn),
    adminResource(conn)
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
