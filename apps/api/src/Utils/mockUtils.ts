import { NextFunction, Response } from "express"
import { ParamsType, QueryType, Req, BodyType, ReqExtType } from "./request"
import { RouteHandler } from "./routeHandler"

export interface MockNext {
  (): void
}

export interface UserSession {
  id: string
}
export interface MockRequest<Body = {}, Params = {}> {
  params?: Params,
  body?: Body,
  user?: UserSession,
}

interface Jest {
  fn<A, B extends any[]> (impl?: () => void): jest.Mock<A, B>
}

export interface MockResponse {
  // json: jest.Mock,
  // status: jest.Mock,
  json: jest.Mock<Express.Response, [any]>,
  status: jest.Mock<Express.Response, [number]>,
}

// export type createRequestMock = <Body extends BodyType = {}, ReqExt extends ReqExtType = {}, Params extends ParamsType = {}, Query extends QueryType = {}> (body?: Body, params?: Params, reqExt?: ReqExt, query?: Query) => Req<Body, ReqExt, Params, Query> 
export const createRequestMock = <Body extends BodyType = {}, ReqExt extends ReqExtType = {}, Params extends ParamsType = {}, Query extends QueryType = {}> (body?: Body, params?: Params, reqExt?: ReqExt, query?: Query): Req<Body, ReqExt, Params, Query>  => {
  const reqMock = { body, params, query } as Req<Body, ReqExt, Params, Query> 
  const reqExtension = reqExt ?? {}
  return { ...reqExtension, ...reqMock }
}

export const createResponseMock = (_jest: Jest = jest) => {
  const responseMock: MockResponse = {
    json: _jest.fn(),
    status: _jest.fn(() => responseMock),
  }

  return responseMock
}

export const mockRouteHandler = <R extends Req>
  (handler: RouteHandler<R>, request: R, response: MockResponse, next?: MockNext) =>
    handler(request as R, response as unknown as Response, next as NextFunction)

export type mock<Fn extends (...args: any) => any> = jest.Mock<ReturnType<Fn>, Parameters<Fn>>
export const asMock = <A extends (...args: any) => any>(a: A) => a as any as mock<A>
