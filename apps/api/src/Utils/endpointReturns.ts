import { errorReturn, successfulReturn } from "./response"

// sucessful returns
export const updatedSuccessfullyReturn = successfulReturn(200)
export const fetchedSuccessfullyReturn = successfulReturn(200)
export const actionSuccessfulReturn = successfulReturn(200)
export const createdSuccessfullyReturn = successfulReturn(201)

// error returns
export const syntaticErrorReturn = errorReturn(400)
export const semanticErrorReturn = errorReturn(400)
export const unauthenticatedErrorReturn = errorReturn(401)
export const unauthorizedErrorReturn = errorReturn(401)
export const notFoundErrorReturn = errorReturn(404)
export const unidentifiedErrorReturn = errorReturn(500)
