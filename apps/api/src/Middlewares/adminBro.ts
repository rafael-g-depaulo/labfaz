import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import { Database, Resource } from '@admin-bro/typeorm';
import User from 'Entities/User'; 
import { Connection } from 'typeorm'

AdminBro.registerAdapter( { Database, Resource } )

export const getAdminBro = (conn: Connection) => {
    User.useConnection(conn)
    return new AdminBro({
      resources: [User],
      rootPath: '/admin'
    })
}

const getAdminRouter = (adminBro: AdminBro) => {
  return AdminBroExpress.buildRouter(adminBro);
}

export default getAdminRouter;
