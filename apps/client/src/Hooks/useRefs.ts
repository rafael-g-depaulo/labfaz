import { createRef, RefObject, useEffect, useState } from "react"

// creates and maintains "n" HTMLElement references
export default <T = HTMLElement>(n?: number) => {
  // element refs
  const [elRefs, setElRefs] = useState<RefObject<T>[]>([])

  // add or remove refs until there is the correct ammount
  // whenever n changes
  useEffect(() => {
    setElRefs(elRefs => Array(n)
      .fill(null)
      .map((_, i) => elRefs[i] || createRef())
    )
  }, [n])

  return elRefs
}