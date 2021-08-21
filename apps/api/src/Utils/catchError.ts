import { NextFunction, Response } from "express"

import { Middleware } from "Middlewares"

import { errorReturnFn } from "Utils/response"
import { Req } from "Utils/request"
import { unidentifiedError } from "./endpointReturns"

export const catchError = (middleware: Middleware, returnFn?: errorReturnFn, errorMsg?: string) => (req: Req, res: Response, next: NextFunction) => {
  const errorReturn = returnFn ?? unidentifiedError
  console.log("1")
  try {
    middleware(req, res, next)
    console.log("2")
  } catch (error) {
    console.log("3")
    errorReturn(res, errorMsg ?? "Unidentified Error.", { error })
  }
}
