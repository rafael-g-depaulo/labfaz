import { Request } from "express"

export type QueryType = { [key: string]: undefined | string | string[] | QueryType | QueryType[] }
export type ParamsType =  { [index: string]: string; }
export type BodyType = object
export type ReqExtType = object

export type Optional<T extends object> = {
  [key in keyof T]?: T[key] 
}

export type Req<
  Body extends BodyType = {},
  ReqObjExtension extends ReqExtType = {},
  Params extends ParamsType = {},
  Query extends QueryType = {},
> = Request<Params, {}, Record<keyof Body, any>, Query> & Optional<ReqObjExtension>
