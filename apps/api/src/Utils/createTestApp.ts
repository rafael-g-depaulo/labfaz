import supertest from "supertest"
import express, { Router as ExpressRouter } from "express"
import Middlewares from "Middlewares"
import { syntaticErrorReturn } from "./endpointReturns"

export const createTestApp = (Router: ExpressRouter, baseRoute: string = "/") => {
  const app = express()
    
  // apply middlewares
  Middlewares(app)
  
  // add Router and catcher for unkown route
  app
    .use(baseRoute, Router)
    .use("*", (_, res) => syntaticErrorReturn(res, "Route doesn't exist" ))
  
  return supertest
    .agent(app)
}

export default createTestApp
