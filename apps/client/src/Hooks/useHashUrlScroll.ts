import { RefObject } from "react"

import useCurrentlyScrolledElement, { Options as CurOptions } from "Hooks/useCurrentlyScrolledElement"
import useDynamicScroll from "Hooks/useDynamicScroll"
import useMsPassed from "Hooks/useMsPassed"
import useUrlHash from "Hooks/useUrlHash"

// hook to connect the id's of the elements from an array of react refs
// to the hash in the path. this then automatically changes the url based on
// the screen scroll, and scrolls the screen automatically when given an URL
// with a valid id of a present element

export interface Options extends CurOptions {
  disableDelay?: number,
  dynamicScrollDelay?: number
}

export const useHashUrlScroll = (refs: RefObject<HTMLElement>[], options?: Options) => {
  
  const {
    wait = 100,
    margin = 5,
    disableDelay = 750,
    dynamicScrollDelay = 300,
  } = options ?? {}

  // get currently scrolled element
  const currentEle = useCurrentlyScrolledElement(refs, { wait, margin })
  const curEleId = currentEle?.id ?? ""

  // disable this hook while the page and content loads
  const hasScrolledLoad = useMsPassed(disableDelay)

  // update path when current scrolled element changes
  useUrlHash(curEleId, { disable: !hasScrolledLoad })

  // scroll dynamically to correct id on load
  useDynamicScroll(dynamicScrollDelay)
}

export default useHashUrlScroll
