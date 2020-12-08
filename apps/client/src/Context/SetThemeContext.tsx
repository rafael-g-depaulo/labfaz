import { createContext, Dispatch, SetStateAction } from "react"
import Theme from "Themes"

interface SetTheme extends Dispatch<SetStateAction<Theme>> {}

export const SetThemeContext = createContext<SetTheme>(a => a)

export default SetThemeContext
