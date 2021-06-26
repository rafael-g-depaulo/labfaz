export const localhost = `localhost`
// default protocol used in local development env
export const protocol = `http`

// API PORT
export const getApiPort = () => {
  const portEnv = Number(process.env.PORT || "5000")

  if (isNaN(portEnv))
    throw new Error("PORT environment variable present, but not a number")

  return portEnv
}

// API
const getApiUrlEnvVar = () => process.env.API_URL ?? process.env.REACT_APP_API_URL

export const defaultApiUrl = `api.labfaz.com.br/`
export const getApiUrl = () => process.env.NODE_ENV === 'production'
  ? getApiUrlEnvVar() ?? defaultApiUrl
  : `${protocol}://${localhost}:${getApiPort()}`

// STRAPI
const getStrapiUrlEnvVar = () => process.env.STRAPI_URL ?? process.env.REACT_APP_STRAPI_URL
export const getStrapiPort = () => 1337

export const defaultStrapiHost = `backoffice.labfaz.com.br/`
export const getStrapiHost = () => process.env.NODE_ENV === 'production'
  ? defaultStrapiHost : `${localhost}:${getStrapiPort()}`

export const getStrapiUrl = () => process.env.NODE_ENV === 'production'
  ? getStrapiUrlEnvVar() ?? getStrapiHost()
  : `${protocol}://${getStrapiHost()}`
