import { setColor } from "./cssVar"

// utility types
export type Color = string
export type ColorDict<names extends string = string> = {[name in names]: Color}
export type ColorName = RawColorName | PalleteColorName

// raw colors
const rawColorNames = [
  'black',
  'white',
  'pink',
] as const
export type RawColorName = typeof rawColorNames[number]
export const rawColors: ColorDict<RawColorName> = {
  black: '#000000',
  white: '#FFFFFF',
  pink: '#FC0061',
}

// pallete colors
const palleteColorNames = [
  'text',
  'primary',
  'secondary',
  'accent',
] as const
export type PalleteColorName = typeof palleteColorNames[number]
export const palleteColors: ColorDict<PalleteColorName> = {
  accent:    rawColors['pink'],
  primary:   rawColors['white'],
  secondary: rawColors['pink'],
  text:      rawColors['white'],
}

export const setupColorVars = () => 
  Object.entries(rawColors).map(([name, value]) => setColor(name as ColorName, value)).join("\n") +
  Object.entries(palleteColors).map(([name, value]) => setColor(name as ColorName, value)).join("\n")
