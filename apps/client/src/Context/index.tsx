import { FC } from "react"

import { CurrentUserProvider } from "./LoggedUserToken"
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
