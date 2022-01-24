
const isObject = (obj: any): obj is object => obj && typeof obj === 'object'

const deepMerge = (...objects: object[]) => {
  return objects.reduce((acc: any, obj: any) => {
    Object.keys(obj).forEach(key => {
      const accVal = acc[key]
      const objVal = obj[key]
      
      if (Array.isArray(accVal) && Array.isArray(objVal))
        acc[key] = [...accVal, ...objVal]
      else if (isObject(accVal) && isObject(objVal))
        acc[key] = deepMerge(accVal, objVal)
      else
        acc[key] = objVal
    })
    
    return acc
  }, {})
}

export default deepMerge
