import { NextFunction, Response } from "express"
import { Req } from "./request"

export type RouteHandler<R extends Req> = (req: R, res: Response, next: NextFunction) => void
export type RouteHandlerErr<R extends Req> = (err: Error, req: R, res: Response, next: NextFunction) => void
