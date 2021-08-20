import { errorReturn, successfulReturn } from "./response"

// sucessful returns
export const updatedSuccessfully = successfulReturn(200)
export const fetchedSuccessfully = successfulReturn(200)
export const actionSuccessful = successfulReturn(200)
export const createdSuccessfully = successfulReturn(201)

// error returns
export const badRequestError = errorReturn(400)
export const unauthenticatedError = errorReturn(401)
export const unauthorizedError = errorReturn(401)
export const notFoundError = errorReturn(404)
export const databaseError = errorReturn(500)
export const unidentifiedError = errorReturn(500)
