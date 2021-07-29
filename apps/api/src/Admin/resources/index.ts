import userResource from './userResource'
import { Connection } from 'typeorm'
import User from 'Entities/User'


export const getResources = () => {
  return [
    userResource(),
  ]
}

export const makeConnections = (conn: Connection) => {
  User.useConnection(conn)
}
