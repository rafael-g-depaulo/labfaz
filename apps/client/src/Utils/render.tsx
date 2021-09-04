import React, { FC, HTMLAttributes, ReactElement } from "react"
import { render } from 'react-dom'
import { getQueriesForElement } from "@testing-library/dom"

import { BrowserRouter } from "react-router-dom"
import GlobalContext from 'Context'

// wrap component with necessary context
const Wrapper: FC = ({ children }) => {
  return (
    <GlobalContext>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </GlobalContext>
  )
}

// utility function to render component
const renderComponent = < T extends Element, P extends HTMLAttributes<T>> (component: ReactElement<P, string>) => {
  const root = document.createElement("div")
  render(<Wrapper>{ component }</Wrapper>, root)
  return getQueriesForElement(root)
}

export default renderComponent
