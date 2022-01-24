export const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (_key: string, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

export const stringifyCircular = (circularReference: object) => JSON.stringify(circularReference, getCircularReplacer())

export const removeCircularity = (circularObj: object): object => JSON.parse(stringifyCircular(circularObj))

export default stringifyCircular
