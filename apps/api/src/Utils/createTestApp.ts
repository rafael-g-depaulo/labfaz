import supertest from "supertest"
import express, { Router as ExpressRouter } from "express"
import Middlewares from "Middlewares"

export const createTestApp = (Router: ExpressRouter, baseRoute: string = "/") => {
  const app = express()
    
  // apply middlewares
  Middlewares(app)
  
  // add Router and catcher for unkown route
  app
    .use(baseRoute, Router)
    .use("*", (_, res) => res.status(400).json({ error: "Route doesn't exist" }))
  
  return supertest
    .agent(app)
}

export default createTestApp
