<<<<<<< HEAD
import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "Config/auth";
import { unauthenticatedError } from "Utils/endpointReturns";
import { Req } from "Utils/request";
=======
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "Config/auth";
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)

export interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
}

export interface UserJWTPayload {
  user: { id: string }
}

export default function ensureAuthenticated(
  req: Req<{}, UserJWTPayload>,
=======
  id?: string;
=======
  id: string;
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
}

export default function ensureAuthenticated(
  req: Request,
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
  res: Response,
  next: NextFunction
) {
  // Validação do token JWT do usuário

  const authHeader = req.headers.authorization;

  if (!authHeader) {
<<<<<<< HEAD
    return unauthenticatedError(res, "JWT token is missing")
  }

  const [, token] = authHeader.split(" ");
  
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    console.log(decoded);
    const { id } = decoded as ITokenPayload;
    
=======
    return res.status(401).json({ error: "JWT token is missing" });
  }

  const [, token] = authHeader.split(" ");

  
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    console.log(decoded);
    const { id } = decoded as ITokenPayload;
<<<<<<< HEAD

>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
=======
    
    
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
    if (id) {
      req.user = {
        id,
      };
    } else {
<<<<<<< HEAD
      return unauthenticatedError(res, "User without id in token is not a valid token!! ");
=======
      throw Error("User without id in token is not a valid token!! ");
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
    }

    return next();
  } catch {
<<<<<<< HEAD
    return unauthenticatedError(res, "Invalid JWT token")
=======
    return res.status(401).json({ error: "Invalid JWT token" });
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
  }
}
