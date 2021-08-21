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
import { errorHandler } from 'ErrorHandler'
// import User from 'Db/Entities/User'
Db()
  .then(async ({ conn }) => {

  // console.log("Loading users from the database...")
  // const users = await conn.manager.find(User)
  // console.log("Loaded users: ", users)

  const port = process.env.PORT ?? 5000
  
  // Foi preciso colocar o admin bro antes dos middlewares por conta do body parser
  const adminBro = getAdminBro(conn)
  app.use(adminBro.options.rootPath, getAdminRouter(adminBro, conn))

  Middewares(app)

  app.use("/", Routes({ conn }))
  app.get('/hello', (_, res) => actionSuccessful(res, { msg: 'world' }))
  app.use("*", (_, res) => badRequestError(res, "Route doesn't exist" ))

  // error handling
  app.use(errorHandler)

  app.listen(port, () => console.log(`listening PORT ${port}, in typescript!`)) 
})
.catch(e => console.error(e))
