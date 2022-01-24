import { Color, ColorName } from "./colors"

export const getVar = (name: string, defaultValue?: string) => !!defaultValue
    ? `var(${name})`
    : `var(${name}, ${defaultValue})`

export const setVar = (name: string, value: string) => `${name}: ${value};`

export const getColor = (name: ColorName) => getVar(`--${name}`)
export const setColor = (name: ColorName, value: Color) => setVar(`--${name}`, value)
