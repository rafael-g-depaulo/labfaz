import axios from "axios"

import { getApiUrl, getStrapiUrl } from "@labfaz/server-conn-info"

// create axios instance to connect to main server
export const api = axios.create({
  baseURL: getApiUrl(),
})
// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: getStrapiUrl(),
})

export type Data = object | string
<<<<<<< HEAD
<<<<<<< HEAD
export type SuccessObject<T extends Data = object> = {
=======
export type SuccessObject<T extends Data> = {
>>>>>>> d43e9dd (✨ Add login code to frontend)
=======
export type SuccessObject<T extends Data = object> = {
>>>>>>> dbad01d (✨ Improve error handling with login API calls)
  status: "success"
  data: T
  code: number
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dbad01d (✨ Improve error handling with login API calls)

export type ErrorObject<T extends Data = object> = {
  status: "error"
  code: number
  message: string
  data?: T
}
<<<<<<< HEAD
=======
>>>>>>> d43e9dd (✨ Add login code to frontend)
=======
>>>>>>> dbad01d (✨ Improve error handling with login API calls)
