import React, { FC } from "react"
import { CurrentUserProvider } from "Context/CurrentUser"

export const GlobalContext: FC = ({ children }) => {
  return (
    <CurrentUserProvider>
      {children}
    </CurrentUserProvider>
  )
}

export default GlobalContext
