import userResource from './userResource'
import adminResource from './adminResource'
import courseResource from './courseResource'
import subscriptionResource from './subscriptionResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = (conn: Connection) => {
  return [
    userResource(conn),
    adminResource(conn),
    courseResource(conn),
    subscriptionResource(conn),
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
