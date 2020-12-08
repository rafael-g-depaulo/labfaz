import { useCallback, useLayoutEffect, useState } from "react"
import { useHistory } from "react-router-dom"

// dynamically scroll to element with id equal to url hash on component load and
// on url hash change, with given delay
const useDynamicScroll = (delay: number = 750) => {
  
  const history = useHistory()
  const { hash } = history.location

  // scroll to element (or root) only once
  const [hasScrolled, setScrolled] = useState(false)
  const scrollToElement = useCallback((element: Element | null) => {
    element = element ?? document.querySelector("#root")
    if (!hasScrolled) {
      setScrolled(true)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }, [hasScrolled])

  useLayoutEffect(() => {
    // wait until window & content loads and then search for element and scroll to it
    setTimeout(() => {
      try {
        const element = hash === "" ? null : document.querySelector(hash)
        scrollToElement(element)
      } catch (e) {
        scrollToElement(null)
      }
    }, delay)
  }, [delay, hash, scrollToElement])

}

export default useDynamicScroll
