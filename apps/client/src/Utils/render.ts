import { HTMLAttributes, ReactElement } from "react"
import { render } from 'react-dom'
import { getQueriesForElement } from "@testing-library/dom"

// utility function to render component
const renderComponent = < T extends Element, P extends HTMLAttributes<T>> (component: ReactElement<P, string>) => {
  const root = document.createElement("div")
  render(component, root)
  return getQueriesForElement(root)
}

export default renderComponent
