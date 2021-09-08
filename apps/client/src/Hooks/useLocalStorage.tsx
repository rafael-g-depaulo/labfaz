import { Dispatch, SetStateAction, useState, useEffect } from "react"

type SetValue<T> = Dispatch<SetStateAction<T>>

function useLocalStorage<T>(key: string, initialValue: T): [T, setValue<T>] {

  const readValue = (): T => {
    if(typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) as T : initialValue
    }
    catch(error) {
      console.warn(`key ${key} not found`)
      return initialValue;
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue: SetValue<T> = value => {
    if(typeof window === 'undefined') {
      console.warn(
        `Tentativa de settar localStorage key ${key}`
      )
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value

      window.localStorage.setItem(key, JSON.stringify(newValue))

      setStoredValue(newValue)

      window.dispatchEvent(new Event('local-storage'))
    }
    catch(error) {
      console.warn(`Error setting localstorage key ${key}`, error)
    }

  }

  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue())
    }

    window.removeEventListener('storage', handleStorageChange)
    window.removeEventListener('local-storage', handleStorageChange)
  }, [])

  return [storedValue, setValue]
}

export default useLocalStorage
