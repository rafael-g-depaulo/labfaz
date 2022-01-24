
export type Optional<T extends object> = {
  [key in keyof T]?: T[key] 
}
