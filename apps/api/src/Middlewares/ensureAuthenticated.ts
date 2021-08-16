import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "Config/auth";
import { unauthenticatedErrorReturn } from "Utils/endpointReturns";

export interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  id: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Validação do token JWT do usuário

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return unauthenticatedErrorReturn(res, "JWT token is missing")
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
      throw Error("User without id in token is not a valid token!! ");
    }

    return next();
  } catch {
    return unauthenticatedErrorReturn(res, "Invalid JWT token")
  }
}
