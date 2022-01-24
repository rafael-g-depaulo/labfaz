import { useCallback, useEffect, useRef, useState } from "react"

const useTimeout = (ms: number, autoStart = false) => {

  const timeout = useRef<NodeJS.Timeout | null>(null)

  const [done, setDone] = useState(true)

  const onFinish = useCallback(() => setDone(true), [setDone])

  const start = useCallback(() => {
    setDone(false)
    timeout.current = setTimeout(onFinish, ms)
  }, [onFinish, ms])

  const stop = useCallback(() => {
    if (timeout.current === null) return

    setDone(true)
    clearTimeout(timeout.current)
    timeout.current = null
  }, [])

  // start timeout on first render if autoStart prop given
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {
    if (autoStart && firstRender) {
      start()
      setFirstRender(false)
    }
  }, [start, autoStart, firstRender])

  return { start, stop, done }
}

export default useTimeout
