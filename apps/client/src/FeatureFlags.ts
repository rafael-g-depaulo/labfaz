const UseEnvVar = (varName: string, defaultValue: boolean) => {
  const envVar = process.env[varName]
  return envVar === "true" ? true :
    envVar === "false" ? false : defaultValue
}

export const showRoutes = UseEnvVar("REACT_APP_SHOW_ROUTES", true)

export const showHome = UseEnvVar("REACT_APP_SHOW_HOME", true)
export const showBlog = UseEnvVar("REACT_APP_SHOW_BLOG", true)
export const showObservatorio = UseEnvVar("REACT_APP_SHOW_OBSERVATORIO", true)
export const showAboutUs = UseEnvVar("REACT_APP_SHOW_ABOUT_US", true)
export const showCourses = UseEnvVar("REACT_APP_SHOW_COURSES", true)

export const showProfileMine = UseEnvVar("REACT_APP_SHOW_PROFILE_ME", true)
export const showProfileOther = UseEnvVar("REACT_APP_SHOW_PROFILE_OTHER", true)
export const showUserSearch = UseEnvVar("REACT_APP_SHOW_USER_SEARCH", true)
export const showForgotPassword = UseEnvVar("REACT_APP_SHOW_FORGOT_PASSWORD", true)
export const showEditProfile = UseEnvVar("REACT_APP_SHOW_EDIT_PROFILE", true)

export const showReactQueryDevtools = UseEnvVar("REACT_APP_SHOW_RQUERY_DEVTOOLS", true)
