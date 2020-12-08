import { NextFunction, Request, Response, Express } from 'express'

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "./cors"

export type Middleware = (req: Request, res: Response, next: NextFunction) => void

export default (app: Express) => {

  // to allow cors from desirable origins
  app.use(cors())
  
  // To parse cookies from the HTTP Request
  app.use(cookieParser())

  // body parser to parse http requests' bodies
  app.use(bodyParser.json({}))
  app.use(bodyParser.urlencoded({ extended: true }))

}
