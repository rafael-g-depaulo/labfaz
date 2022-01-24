import { NextFunction, Request, Response } from "express"

export type QueryType = { [key: string]: undefined | string | string[] | QueryType | QueryType[] }

export type Optional<T extends object> = {
  [key in keyof T]?: T[key] 
}

// export type ReqBody<T extends object> = Record<keyof T, any>
export type Req<
  Body extends object = {},
  ReqObjExtension extends object = {},
  Params extends { [key: string]: string; } = {},
  Query extends QueryType = {},
> = Request<Params, {}, Record<keyof Body, any>, Query> & Optional<ReqObjExtension>

export type RouteHandler<R extends Req> = (req: R, res: Response, next: NextFunction) => void
export type RouteHandlerErr<R extends Req> = (err: Error, req: R, res: Response, next: NextFunction) => void
