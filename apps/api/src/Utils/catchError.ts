import { NextFunction, Response } from "express"

import { Middleware } from "Middlewares"

import { errorReturnFn } from "Utils/response"
import { Req } from "Utils/request"
import { unidentifiedError } from "./endpointReturns"

export const catchError = (middleware: Middleware, returnFn?: errorReturnFn, errorMsg?: string) => (req: Req, res: Response, next: NextFunction) => {
  const errorReturn = returnFn ?? unidentifiedError
  try {
    middleware(req, res, next)
  } catch (error) {
    errorReturn(res, errorMsg ?? "Unidentified Error.", { error })
  }
}
