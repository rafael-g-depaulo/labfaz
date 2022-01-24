import { Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import authConfig from "Utils/authConfig"
import { unauthenticatedError } from "Utils/endpointReturns"
import { Req } from "Utils/request"

export interface ITokenPayload {
  iat: number
  exp: number
  sub: string
  id: string
}

export interface UserJWTPayload {
  user: { id: string }
}

export default function ensureAuthenticated(
  req: Req<{}, UserJWTPayload>,
  res: Response,
  next: NextFunction
) {
  // Validação do token JWT do usuário
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return unauthenticatedError(res, "JWT token is missing")
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { id } = (decoded ?? {}) as ITokenPayload

    if (!id) {
      return unauthenticatedError(res, "Invalid JWT token")
    }

    req.user = { id }
    return next()
  } catch {
    return unauthenticatedError(res, "Invalid JWT token")
  }
}
