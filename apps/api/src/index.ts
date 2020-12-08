import express from 'express'

const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

// setup db connection
import Db from "Db"
import Routes from "Routes"
// import User from 'Db/Entities/User'
Db()
  .then(async ({ conn }) => {

  // console.log("Loading users from the database...")
  // const users = await conn.manager.find(User)
  // console.log("Loaded users: ", users)

  const port = process.env.PORT ?? 5000
  
  app.use("/", Routes({ conn }))

  app.get('/hello', (_, res) => res.json({ msg: 'world' }))
    
  app.use("*", (_, res) => res.status(400).json({ error: "Route doesn't exist" }))

  app.listen(port, () => console.log(`listening PORT ${port}, in typescript!`)) 
})
.catch(e => console.error(e))
