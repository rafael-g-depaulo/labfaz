import React, { FC } from "react"

import { CurrentUserProvider } from "./CurrentUser"
import { QueryClientProvider } from "./QueryClient"

export const GlobalContext: FC = ({ children }) => {
  return (
    <QueryClientProvider>
      <CurrentUserProvider>
        {children}
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default GlobalContext
