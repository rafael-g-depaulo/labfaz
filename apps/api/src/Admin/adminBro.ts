import AdminBro from 'adminjs'
import AdminBroExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/typeorm';
import { Connection } from 'typeorm'
import { getResources, makeConnections } from './resources'
import AdminRepository from 'Repository/AdminRepository';
import TeacherRepository from 'Repository/TeacherRepository';


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
      rootPath: '/admin',
      locale: {
        language: "pt",
        translations: {
          labels: {
            Teacher: "Professores",
            Course: "Cursos",
            User: "Usuários"
          }
        }
      }
    })
}

const getAdminRouter = (adminBro: AdminBro, conn: Connection) => {
  return AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const adminRepo = conn.getCustomRepository(AdminRepository)
      const teacherRepo = conn.getCustomRepository(TeacherRepository)
      // Tendo a entidade de usuario bem definida com roles da pra
      // fazer essa autenticação usando a dados do banco de dados
      if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
        return {
          email,
          title: "SuperAdmin",
          id: 1
        }
      } else {

        const currentAdmin = await adminRepo.findByEmail(email)
        const currentTeacher =  await teacherRepo.findByEmail(email)

        if(currentAdmin) {
          if(currentAdmin.email === email && adminRepo.compareHash(password, currentAdmin.password)) {
            return {
              email,
              title: currentAdmin.role,
              id: currentAdmin.id
            }
          }          
        }

        if(currentTeacher) {
          if(currentTeacher.email === email && teacherRepo.compareHash(password, currentTeacher.password)) {
            return {
              email,
              title: currentTeacher.role,
              id: currentTeacher.id
            }
          }
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
