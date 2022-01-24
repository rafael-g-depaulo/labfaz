import express, { Router as ExpressRouter, RouterOptions } from "express"
import { Connection } from "typeorm"

// sub routers
import AnimalExampleRouter from "./AnimalExample"
import UserRouter from "./User"

export interface RouterDeps {
  conn: Connection
}

export interface Router<Deps extends RouterDeps> {
  (deps: Deps, options?: RouterOptions): ExpressRouter
}

const defaultOptions: RouterOptions = {
  mergeParams: true
}

type BaseRouterDeps = {
  conn: Connection
}

const Routes: Router<BaseRouterDeps> = ({ conn }, options = defaultOptions) => express.Router(options)
  .get("/ping", (_, res) => res.json("pong"))
  .use("/animals", AnimalExampleRouter({ conn }, options))
  .use("/users", UserRouter({ conn }, options))

export default Routes
