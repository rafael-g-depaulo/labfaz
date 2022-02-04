import express, { Router as ExpressRouter, RouterOptions } from "express"
import { Connection } from "typeorm"

// sub routers
import CourseRoute from "./Courses"
import SessionRouter from "./Session"
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
  .use("/users", UserRouter({ conn }, options))
  .use("/sessions", SessionRouter({ conn }, options))
  .use("/courses", CourseRoute({ conn }, options))

export default Routes
