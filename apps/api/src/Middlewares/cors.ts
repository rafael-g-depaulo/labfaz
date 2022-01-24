import { Middleware } from "Middlewares"
import _cors from "cors"

export const setupAllowedOrigins = () => {
  let allowedOrigins: RegExp[] = []

  // if not in production, accept all requests from localhost
  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.push(/localhost/)
  }
  
  // if CORS_REGEX env is set, add it to allowedOrigins
  if (!!process.env.CORS_REGEX) {
    const flags = process.env.CORS_REGEX_FLAGS ?? ""
    const newAllowedOrigin = new RegExp(process.env.CORS_REGEX, flags)
    allowedOrigins.push(newAllowedOrigin)
  }

  return allowedOrigins
}

export type CorsCallback = (err: Error | null, allow?: boolean | undefined) => void
export const originChecker = (allowedOrigins: RegExp[]) => (origin: string | undefined, callback: CorsCallback) => {

  // return callback(null, true) //shortcircuit the whole shebang

  // allow requests with no origin
  // (like mobile apps or curl requests)
  if (!origin) return callback(null, true)

  // allow request from allowed origins
  let isAllowed = false
  allowedOrigins.forEach(originRegex => {
    if (originRegex.test(origin)) isAllowed = true
  })

  if (!isAllowed) {
    const msg = `The CORS policy for this site does not allow access from the specified Origin (${origin})`
    return callback(new Error(msg), false)
  }
  return callback(null, true)
}

export const cors: () => Middleware = () => {
  const allowedOrigins = setupAllowedOrigins()
  return _cors({
    origin: originChecker(allowedOrigins),
    credentials: true,
  })
}

export default cors
