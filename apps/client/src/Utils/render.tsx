import { FC, HTMLAttributes, ReactElement } from "react"
import { render } from 'react-dom'
import { getQueriesForElement } from "@testing-library/dom"

import { BrowserRouter } from "react-router-dom"
import GlobalContext from 'Context'

export interface RenderComponentProps {
  router?: boolean
}

// wrap component with necessary context
const Wrapper: FC<RenderComponentProps> = ({ children, router = true }) => {
  const childrenRoutes = router
    ? <BrowserRouter>{ children }</BrowserRouter>
    : children

  return (
    <GlobalContext>
      { childrenRoutes }
    </GlobalContext>
  )
}

// utility function to render component
const defaultProps: RenderComponentProps = {}
const renderComponent = < T extends Element, P extends HTMLAttributes<T>> (component: ReactElement<P, string>, props: RenderComponentProps = defaultProps) => {
  const root = document.createElement("div")
  render(<Wrapper {...props}>{ component }</Wrapper>, root)
  return getQueriesForElement(root)
}

export default renderComponent
