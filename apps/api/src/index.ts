import express from 'express'

import getAdminRouter, { getAdminBro } from 'Admin/adminBro'

const app = express()

// setup middlewares
import Middewares from "Middlewares"
// setup db connection
import Db from "Db"
import Routes from "Routes"
// import { adminBroRouter } from 'Routes/adminBro'

import { actionSuccessful, badRequestError } from 'Utils/endpointReturns'
// import User from 'Db/Entities/User'
Db()
  .then(async ({ conn }) => {

  // console.log("Loading users from the database...")
  // const users = await conn.manager.find(User)
  // console.log("Loaded users: ", users)

  const port = process.env.PORT ?? 5000
  
  app.use("/", Routes({ conn }))

  const adminBro = getAdminBro(conn)

  app.use(adminBro.options.rootPath, getAdminRouter(adminBro))

  // Foi preciso colocar os middlewares depois do admin bro por conta do body parser
  Middewares(app)

  app.get('/hello', (_, res) => actionSuccessful(res, { msg: 'world' }))
    
  app.use("*", (_, res) => badRequestError(res, "Route doesn't exist" ))

  app.listen(port, () => console.log(`listening PORT ${port}, in typescript!`)) 
})
.catch(e => console.error(e))
