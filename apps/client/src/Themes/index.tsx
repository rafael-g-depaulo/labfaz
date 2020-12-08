import React, { FC, useState } from "react"
import { ThemeProvider as ScThemeProvider } from "styled-components"

import SetThemeContext from "Context/SetThemeContext"

import defaultTheme from "./default"

export interface Theme {
  fontSize: string,
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}


export const ThemeProvider: FC = ({ children }) => {
  
  const [ theme, setTheme ] = useState(defaultTheme)
  
  return (
    <SetThemeContext.Provider value={setTheme} >
      <ScThemeProvider theme={theme}>
        { children }
      </ScThemeProvider>
    </SetThemeContext.Provider>
  )
}

export default Theme
