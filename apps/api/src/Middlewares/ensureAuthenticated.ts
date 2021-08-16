import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "Config/auth";
import { unauthenticatedError } from "Utils/endpointReturns";
import { Req } from "Utils/request";

export interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  id: string;
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

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return unauthenticatedError(res, "JWT token is missing")
  }

  const [, token] = authHeader.split(" ");
  
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    console.log(decoded);
    const { id } = decoded as ITokenPayload;
    
    if (id) {
      req.user = {
        id,
      };
    } else {
      return unauthenticatedError(res, "User without id in token is not a valid token!! ");
    }

    return next();
  } catch {
    return unauthenticatedError(res, "Invalid JWT token")
  }
}
