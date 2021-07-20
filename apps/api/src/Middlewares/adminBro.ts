import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import { Database, Resource } from '@admin-bro/typeorm';
import User from 'Entities/User'; 


AdminBro.registerAdapter({ Database, Resource })

export const adminBro = new AdminBro({
  // databases: [],
  resources: [
    { resource: User }
  ],
  rootPath: '/admin'
})

const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

export default adminBroRouter
