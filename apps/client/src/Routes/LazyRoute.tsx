import { FC, Suspense } from "react"

export const LazyRoute: FC = ({
  children
}) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {children}
    </Suspense>
  )
}

export default LazyRoute
