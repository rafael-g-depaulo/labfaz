const UseEnvVar = (varName: string, defaultValue: boolean) => {
  const envVar = process.env[varName]
  return envVar === "true" ? true :
    envVar === "false" ? false : defaultValue
}

export const showRoutes = UseEnvVar("REACT_APP_SHOW_ROUTES", true)

export const showReactQueryDevtools = UseEnvVar("REACT_APP_SHOW_RQUERY_DEVTOOLS", true)
