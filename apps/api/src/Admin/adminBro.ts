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
        logo: false
      },
      rootPath: '/admin'
    })
}

const getAdminRouter = (adminBro: AdminBro) => {
  return AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: (email, password) => {
      console.log(email, password)
    },
    cookiePassword: 'somestrongpassowrd',
    cookieName: 'nicename'
  },
  null,
  {
    saveUninitialized: false,
    resave: true,
    secret: 'somestrongpassword'
  });
}

export default getAdminRouter;
