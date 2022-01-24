import { setColor } from "./cssVar"

// utility types
export type Color = string
export type ColorDict<names extends string = string> = {[name in names]: Color}
export type ColorName = RawColorName | PalleteColorName

// raw colors
const rawColorNames = [
  'white',
  'gray',
  'black',
  'orange',
  'pink',
  'teal'
] as const
export type RawColorName = typeof rawColorNames[number]
export const rawColors: ColorDict<RawColorName> = {
  white:  `#FFFFFF`,
  gray:   `#888888`,
  black:  `#000000`,
  orange: `#E27D60`,
  pink:   `#C38D9E`,
  teal:   `#41B3A3`,
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
  primary:   rawColors['orange'],
  secondary: rawColors['teal'],
  text:      rawColors['black'],
}

export const setupColorVars = () => 
  Object.entries(rawColors).map(([name, value]) => setColor(name as ColorName, value)).join("\n") +
  Object.entries(palleteColors).map(([name, value]) => setColor(name as ColorName, value)).join("\n")
