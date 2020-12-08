import { useRef, useLayoutEffect, MutableRefObject, useCallback } from 'react'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({ element, useWindow }: { element?: MutableRefObject<null>, useWindow: boolean }): Position => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element?.current ?? document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

interface Position {
  x: number,
  y: number,
}

interface ScrollEffect {
  (props: { prevPos?: Position, currPos?: Position }): void
}

export interface Options {
  element?: MutableRefObject<null>,
  wait?: number,
  useWindow?: boolean,
}

export const useScrollPosition = (effect: ScrollEffect, { element, wait, useWindow = false }: Options = {}) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = useRef<number | null>(null)

  const callback = useCallback(() => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout.current = null
  }, [element, useWindow, effect])

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callback, wait)
        }
      } else {
        callback()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [wait, callback])
}

// code taken partly from https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

export default useScrollPosition
