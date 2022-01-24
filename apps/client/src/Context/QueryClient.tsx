import { FC } from "react"

import { showReactQueryDevtools } from "FeatureFlags"

import { QueryClientProvider as QCProvider, QueryClient as QC } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

export const reactQueryClient = new QC({
  defaultOptions: {
  }
})

export interface QueryClientProviderProps {
  showDevtools?: boolean
}

export const QueryClientProvider: FC<QueryClientProviderProps> = ({
  showDevtools,
  children,
}) => {
  return (
    <QCProvider client={reactQueryClient}>
      { (showDevtools ?? showReactQueryDevtools) && <ReactQueryDevtools initialIsOpen={false} /> }
      { children }
    </QCProvider>
  )
}
