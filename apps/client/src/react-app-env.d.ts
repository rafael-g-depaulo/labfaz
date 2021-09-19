/// <reference types="react-scripts" />

type flagType = 'true' | 'false' | ''
// type flagType = boolean

declare namespace NodeJS {
  interface ProcessEnv {
    // node env
    NODE_ENV: 'development' | 'production' | 'test',
    
    // url of APIs used
    REACT_APP_STRAPI_URL: string
    REACT_APP_API_URL: string

    // feature flags
      // routes
      REACT_APP_SHOW_ROUTES: flagType,
      REACT_APP_SHOW_HOME: flagType
      REACT_APP_SHOW_BLOG: flagType
      REACT_APP_SHOW_OBSERVATORIO: flagType
      REACT_APP_SHOW_ABOUT_US: flagType
      REACT_APP_SHOW_COURSES: flagType
      REACT_APP_SHOW_PROFILE_ME: flagType
      REACT_APP_SHOW_PROFILE_OTHER: flagType
      REACT_APP_SHOW_USER_SEARCH: flagType
      REACT_APP_SHOW_FORGOT_PASSWORD: flagType
      REACT_APP_SHOW_EDIT_PROFILE: flagType
    // tools
      REACT_APP_SHOW_RQUERY_DEVTOOLS: flagType
    
  }
}
