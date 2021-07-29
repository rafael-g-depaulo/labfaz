import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import { Database, Resource } from '@admin-bro/typeorm';
// import User from 'Entities/User'; 
import { Connection } from 'typeorm'
import AnimalExample from 'Entities/AnimalExample';
import { getResources, makeConnections } from './resources'

// Vai precisar adicionar class validador ao adminBro caso use

AdminBro.registerAdapter( { Database, Resource } )


export const getAdminBro = (conn: Connection) => {
    makeConnections(conn)
    AnimalExample.useConnection(conn)
    return new AdminBro({
      // databases: [conn],
      resources: getResources(),
      branding: {
        companyName: "Labfaz",
        logo: "apps/api/src/Assets/labfaz-logo.jpg"
      },
      rootPath: '/admin'
    })
}

const getAdminRouter = (adminBro: AdminBro) => {
  return AdminBroExpress.buildRouter(adminBro);
}

export default getAdminRouter;
