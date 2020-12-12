import { Request, Response, NextFunction, request } from "express"
import { verify } from "jsonwebtoken"

import authConfig from "Config/auth"

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  // Validação do token JWT do usuário

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "JWT token is missing" })
  }

  const [, token] = authHeader.split(' ')

  try {

    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded as ITokenPayload

    request.user = {
      id: sub,
    }

    return next()

  } catch {

    return res.status(401).json({ error: "Invalid JWT token" })
  }

}
