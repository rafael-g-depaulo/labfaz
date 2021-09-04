const useEnvVar = (varName: string, defaultValue: boolean) => 
  process.env[varName] === "true" ? true :
  process.env[varName] === "false" ? false : defaultValue

export const showRoutes = useEnvVar("REACT_APP_SHOW_ROUTES", true)

export const showHome = useEnvVar("REACT_APP_SHOW_HOME", true)
export const showBlog = useEnvVar("REACT_APP_SHOW_BLOG", true)
export const showAboutUs = useEnvVar("REACT_APP_SHOW_ABOUT_US", true)

export const showReactQueryDevtools = useEnvVar("REACT_APP_SHOW_RQUERY_DEVTOOLS", true)
