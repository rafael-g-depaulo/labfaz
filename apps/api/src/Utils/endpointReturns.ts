import { errorReturn, successfulReturn } from "./response"

// sucessful returns
export const updatedSuccessfullyReturn = successfulReturn(200)

// error returns
export const syntaticErrorReturn = errorReturn(400)
export const unidentifiedErrorReturn = errorReturn(500)
export const notFoundErrorReturn = errorReturn(404)
