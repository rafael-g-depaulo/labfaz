const useEnvVar = (varName: string, defaultValue: boolean) => 
  process.env[varName] === "true" ? true :
  process.env[varName] === "false" ? false : defaultValue

export const showRoutes = useEnvVar("REACT_APP_SHOW_ROUTES", true)

export const showHome = useEnvVar("REACT_APP_SHOW_HOME", true)
export const showBlog = useEnvVar("REACT_APP_SHOW_BLOG", true)
export const showObservatorio = useEnvVar("REACT_APP_SHOW_OBSERVATORIO", true)
export const showAboutUs = useEnvVar("REACT_APP_SHOW_ABOUT_US", true)
export const showCourses = useEnvVar("REACT_APP_SHOW_COURSES", true)

export const showProfileMine = useEnvVar("REACT_APP_SHOW_PROFILE_ME", true)
export const showProfileOther = useEnvVar("REACT_APP_SHOW_PROFILE_OTHER", true)
export const showUserSearch = useEnvVar("REACT_APP_SHOW_USER_SEARCH", true)
export const showForgotPassword = useEnvVar("REACT_APP_SHOW_FORGOT_PASSWORD", true)

export const showReactQueryDevtools = useEnvVar("REACT_APP_SHOW_RQUERY_DEVTOOLS", true)
