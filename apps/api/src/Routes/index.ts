import express, { Router as ExpressRouter, Request, Response, NextFunction, RouterOptions } from "express"
import { Connection } from "typeorm"

// sub routers
import AnimalExampleRouter from "./AnimalExample"
import UserRouter from "./User"
import SessionRouter from './Session'

export interface RequestHandler<ReqBody = {}, Params = {}> {
  (req: Request<Params, {}, ReqBody>, res: Response, next?: NextFunction): any,
}

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
  .use("/animal-example", AnimalExampleRouter({ conn }, options))
  .use("/user", UserRouter({ conn }, options))
  .use("/sessions", SessionRouter({ conn }, options))

export default Routes
