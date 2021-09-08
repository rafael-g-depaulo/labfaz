import { useState, useEffect, useCallback, useRef } from "react"

export const Nothing = Symbol('nothing')
// eslint-disable-next-line no-redeclare
export type Nothing = typeof Nothing
export type Maybe<T> = T | typeof Nothing

export const readFromLocalStorage = <T> (key: string): Maybe<T> => {
  if(typeof window === 'undefined') return Nothing

  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) as T : Nothing
  } catch {
    return Nothing
  }
}

export const writeToLocalStorage = <T> (key: string, value: T) => {
  // deal with edge error case
  if(typeof window === 'undefined') {
    console.warn(`Tentativa de settar localStorage key ${key}, mas window não existe`)
    return
  }

  // set item and dispatch write event because we're good boys
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    window.dispatchEvent(new Event('local-storage'))
  } catch(error) {
    console.warn(`Error setting localstorage key ${key}`, error)
  }
}

export const useLocalStorage = <T> (key: string, initialValue: T): [T, (newValue: T) => void] => {
  const [ state, setState ] = useState<T>(initialValue)
  const initialValueRef = useRef(initialValue)

  // search localstorage for old value once at first render
  useEffect(() => {
    const item = readFromLocalStorage<T>(key)
    // update stored value to initial state if stored value doesn't exist
    if (item === Nothing) writeToLocalStorage(key, initialValueRef.current)
    // update state to stored value if it exists
    else setState(item)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setState, key])

  // create callback to update state and localstorage
  const updateValue = useCallback<(newValue: T) => void>((newValue) => {
    writeToLocalStorage(key, newValue)
    setState(newValue)
  }, [key, setState])

  return [state, updateValue]
}

export default useLocalStorage
