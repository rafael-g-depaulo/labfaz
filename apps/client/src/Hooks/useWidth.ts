import { useState, useEffect, useCallback } from "react"

// code taken from https://usehooks.com/useWindowSize/
export const useWidth = () => {

  const isClient = typeof window === 'object'
  const getSize = useCallback(() => isClient ? window.innerWidth : 0, [ isClient ])
  const [ windowSize, setWindowSize ] = useState(getSize)
  
  useEffect(() => {
    if (!isClient) return
    
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ getSize, isClient ]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export default useWidth
