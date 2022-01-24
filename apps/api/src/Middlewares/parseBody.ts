import { AnyObjectSchema, ValidationError } from "yup"

import { badRequestError } from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

const ParseBody = <Schema extends AnyObjectSchema, SchemaOut extends Schema["__outputType"], req_property extends string>(schema: Schema, req_prop: req_property): RouteHandler<Req<SchemaOut, { [prop in req_property]: SchemaOut}>> => (req, res, next) => {
  // validate body
  schema.validate(req.body, { stripUnknown: true, abortEarly: false })
    // if request body is good, add info and go to next middleware
    .then((parsed_info: SchemaOut) => {
      req[req_prop] = parsed_info as Req<SchemaOut, { [prop in req_property]: SchemaOut; }, {}, {}>[req_property]
      next()
    })
    // if bad request, return
    .catch((err: ValidationError) => badRequestError(res, err.message, err))
}


export default ParseBody
