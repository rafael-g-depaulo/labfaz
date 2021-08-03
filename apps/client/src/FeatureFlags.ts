const useEnvVar = (varName: string, defaultValue: boolean) => 
  process.env[varName] === "true" ? true :
  process.env[varName] === "false" ? false : defaultValue

export const showRoutes = useEnvVar("REACT_APP_SHOW_ROUTES", true)

export const showHome = useEnvVar("REACT_APP_SHOW_HOME", false)
export const showBlog = useEnvVar("REACT_APP_SHOW_BLOG", false)
export const showAboutUs = useEnvVar("REACT_APP_SHOW_ABOUT_US", false)
