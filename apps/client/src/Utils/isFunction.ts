const isFunction = (foo: any): foo is Function => 
  typeof foo === 'function'

export default isFunction
