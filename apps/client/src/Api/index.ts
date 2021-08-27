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
export type SuccessObject<T extends Data = object> = {
=======
export type SuccessObject<T extends Data> = {
>>>>>>> d43e9dd (✨ Add login code to frontend)
  status: "success"
  data: T
  code: number
}
<<<<<<< HEAD

export type ErrorObject<T extends Data = object> = {
  status: "error"
  code: number
  message: string
  data?: T
}
=======
>>>>>>> d43e9dd (✨ Add login code to frontend)
