import { NextFunction, Request, Response, Express, json, urlencoded } from 'express'

import cookieParser from "cookie-parser"
import cors from "./cors"



export type Middleware = (req: Request, res: Response, next: NextFunction) => void

export default (app: Express) => {

  // to allow cors from desirable origins
  app.use(cors())

  
  // To parse cookies from the HTTP Request
  app.use(cookieParser())

  // body parser to parse http requests' bodies
  app.use(json())
  app.use(urlencoded({ extended: true }))

}
