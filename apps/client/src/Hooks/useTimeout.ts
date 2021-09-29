import { useCallback, useEffect, useRef, useState } from "react"

const useTimeout = (ms: number, autoStart = false) => {

  const timeout = useRef<number | null>(null)

  const [done, setDone] = useState(true)

  const onFinish = useCallback(() => setDone(true), [setDone])

  const start = useCallback(() => {
    if (timeout.current !== null) return
    setDone(false)
    timeout.current = setTimeout(onFinish, ms)
  }, [onFinish])

  const stop = useCallback(() => {
    if (timeout.current === null) return

    setDone(true)
    clearTimeout(timeout.current)
  }, [])

  // start timeout on first render if autoStart prop given
  // TODO: maybe add a state to make sure this is only called on first render?
  useEffect(() => {
    if (autoStart) start()
  }, [start, autoStart])

  return { start, stop, done }
}

export default useTimeout
