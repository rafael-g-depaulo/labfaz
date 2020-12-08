// API PORT
export const getApiPort = () => {
  const portEnv = Number(process.env.PORT || "5000")

  if (isNaN(portEnv))
    throw new Error("PORT environment variable present, but not a number")

  return portEnv
}

// API
const getApiUrlEnvVar = () => process.env.API_URL ?? process.env.REACT_APP_API_URL

export const defaultApiUrl = `starter-project-api-prod.herokuapp.com/`
export const getApiUrl = () => process.env.NODE_ENV === 'production'
  ? getApiUrlEnvVar() ?? defaultApiUrl
  : `http://localhost:${getApiPort()}`

// STRAPI
const getStrapiUrlEnvVar = () => process.env.STRAPI_URL ?? process.env.REACT_APP_STRAPI_URL
export const getStrapiPort = () => 1337

export const defaultStrapiUrl = `starter-project-strapi-prod.herokuapp.com/`
export const getStrapiUrl = () => process.env.NODE_ENV === 'production'
  ? getStrapiUrlEnvVar() ?? defaultStrapiUrl
  : `http://localhost:${getStrapiPort()}`
