import express, { Router as ExpressRouter, RouterOptions } from "express"
import { Connection } from "typeorm"

// sub routers
import AnimalExampleRouter from "./AnimalExample"
import UserRouter from "./User"
import SessionRouter from './Session'
<<<<<<< HEAD
import { actionSuccessful } from "Utils/endpointReturns"
=======
export interface RequestHandler<ReqBody = {}, Params = {}> {
  (req: Request<Params, {}, ReqBody>, res: Response, next: NextFunction): any,
}
>>>>>>> a7a7f88 (🔥 ♻️ Remove unecessary login and update session)

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
  .get("/ping", (_, res) => actionSuccessful(res, "pong"))
  .use("/animal-example", AnimalExampleRouter({ conn }, options))
  .use("/user", UserRouter({ conn }, options))
  .use("/sessions", SessionRouter({ conn }, options))


export default Routes
