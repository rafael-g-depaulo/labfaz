import AdminBro from 'adminjs'
import AdminBroExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/typeorm';
import { Connection } from 'typeorm'
import { getResources, makeConnections } from './resources'
import AdminRepository from 'Repository/AdminRepository';

// Vai precisar adicionar class validador ao adminBro caso use

AdminBro.registerAdapter( { Database, Resource } )


export const getAdminBro = (conn: Connection) => {
    makeConnections(conn)
    return new AdminBro({
      // databases: [conn],
      resources: getResources(conn),
      branding: {
        companyName: "Labfaz",
        logo: false
      },
      rootPath: '/admin'
    })
}

const getAdminRouter = (adminBro: AdminBro, conn: Connection) => {
  return AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const adminRepo = conn.getCustomRepository(AdminRepository)
      // Tendo a entidade de usuario bem definida com roles da pra
      // fazer essa autenticação usando a dados do banco de dados
      if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
        return {
          email,
          title: "SuperAdmin",
          id: 1
        }
      } else {

        const current = await adminRepo.findByEmail(email)

        if(current) {
          if(current.email === email && adminRepo.compareHash(password, current.password)) {
            return {
              email,
              title: current?.role,
              id: current.id
            }
          }
          
          return null
        }
      }

      return null
    },
    cookiePassword: process.env.COOKIE_PASSWORD!,
    cookieName: 'adminbro',
  },
  null,
  {
    saveUninitialized: false,
    resave: true,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      sameSite: true
    }
  });
}

export default getAdminRouter;
